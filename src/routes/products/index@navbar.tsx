// File: src/routes/product/[skuId]/index.tsx
import {
  Resource,
  component$,
  useContext,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import CategoryRow from "~/components/molecules/CategoryRow/CategoryRow";
import ProductCard from "~/components/molecules/ProductCard/ProductCard";
import ProductsStyles from "./products.scss?inline";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchSearchResults } from "~/utils/fetchSerarchResults";
import { SearchContext } from "~/contexts/searchContext";

//Glöm inte att starta servern för dummydata: json-server -w ./public/products.json
// const BASE_URL = "http://localhost:3000";

export const useProducts = routeLoader$(async () => {
  try {
    const res = await fetch("http://localhost:3000/products");

    if (res.ok) {
      const data = await res.json();
      return data as Product[];
    }
  } catch (error) {
    console.log(error);
  }
});

export default component$(() => {
  useStylesScoped$(ProductsStyles);

  const products = useProducts();
  const search = useContext(SearchContext);

  const searchResult = useResource$<Product[]>(async ({ track, cleanup }) => {
    const searchReq = track(() => search.searchInput);
    const abortController = new AbortController();
    cleanup(() => abortController.abort());

    return await fetchSearchResults(searchReq);
  });

  return (
    <div class="products">
      <CategoryRow />

      <Resource
        value={searchResult}
        onPending={() => <div>Loading</div>}
        onRejected={(resason) => <div>Error: {resason}</div>}
        onResolved={(results) => (
          results && results.length > 0 ? (
          <div class="productsList">
            <h1>Search results</h1>
            {results?.map((item: Product) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>) : (<></>)
        )}
      />
      <div class="productsList">
        <h1>Products</h1>
        {products.value &&
          products.value.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>
    </div>
  );
});

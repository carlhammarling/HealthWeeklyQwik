// File: src/routes/product/[skuId]/index.tsx
import { component$, useContext, useStore, useStylesScoped$ } from "@builder.io/qwik";
import CategoryRow from "~/components/molecules/CategoryRow/CategoryRow";
import ProductCard from "~/components/molecules/ProductCard/ProductCard";
import ProductsStyles from "./products.scss?inline";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CartContext } from "~/contexts/cartContext";

  //Glöm inte att starta servern för dummydata: json-server -w ./public/products.json
  // const BASE_URL = "http://localhost:3000";

export const useProducts = routeLoader$(async() => {
  try {
    const res = await fetch("http://localhost:3000/products");
    
    if(res.ok) {
      const data = await res.json();    
      return data as Product[];
    }
  } catch (error) {
    console.log(error);
  }
});

export default component$(() => {
  useStylesScoped$(ProductsStyles);
  
const cartData: Cart = useContext(CartContext);
  
  const products = useProducts();

  
  return (
    <div class="products">
      <CategoryRow />
      <div class="productsList">
        {products.value &&
          products.value.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>

      {cartData && cartData.productIds.map((id, index)=> (
        <p key={index}>{id}</p>
      ))}
    </div>
  );
});

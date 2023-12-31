import ImgLogohw2 from "~/assets/images/LogoHW2.png?jsx";
import {
  Resource,
  component$,
  useContext,
  useResource$,
  useStore,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import {
  FaCartShoppingSolid,
  FaChevronLeftSolid,
} from "@qwikest/icons/font-awesome";
import HeaderStyle from "./Header.scss?inline";
import { CartContext } from "~/contexts/cartContext";
import { fetchSearchResults } from "~/utils/fetchSerarchResults";
import { SearchContext } from "~/contexts/searchContext";

export default component$(() => {
  useStylesScoped$(HeaderStyle);

  //Saves variables globaly to be able to affect content across the app. 
  // No need for eventhandlers, jsut onInput/onChange.
  const cartCount = useContext(CartContext);
  const search = useContext(SearchContext);

  useTask$(() => {
    search.searchInput = "";
  })

  
  return (
    <div class="header">
      <nav>
        <ul>
          <li class="iconWrapper">
            <button onClick$={() => window.history.back()}>
              <FaChevronLeftSolid class="icon" />
            </button>
          </li>
          <li>
            <Link href="/">
              <ImgLogohw2 class="logo" alt="" />
            </Link>
          </li>
          <li class="iconWrapper">
            <Link href="/cart">
              <FaCartShoppingSolid class="icon" />
            </Link>
            <div class={cartCount.count > 0 ? "cartCount" : "hide"}>
              <p class={cartCount.count > 9 ? "xs" : ""}>{cartCount.count}</p>
            </div>
          </li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Search for a dish"
        onInput$={(e: any) => (search.searchInput = e.target.value)}
      />

    </div>
  );
});

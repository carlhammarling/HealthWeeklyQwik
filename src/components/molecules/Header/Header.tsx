import ImgLogohw2 from "~/assets/images/LogoHW2.png?jsx";
import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import {
  FaCartShoppingSolid,
  FaChevronLeftSolid,
} from "@qwikest/icons/font-awesome";
import HeaderStyle from "./Header.scss?inline";
import LogoHW2 from "../../../assets/images/LogoHW2.png";
import { CartContext } from "~/root";

export default component$(() => {
  useStylesScoped$(HeaderStyle);

  const cartCount = useContext(CartContext);

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
          </li>
          {cartCount.count > 0 && (
            <div class="cartCount">{cartCount.count}</div>
          )}
        </ul>
      </nav>
      <input type="text" placeholder="Search for a dish" />
    </div>
  );
});

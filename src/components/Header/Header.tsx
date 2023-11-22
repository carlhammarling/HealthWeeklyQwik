import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { FaCartShoppingSolid, FaChevronLeftSolid } from '@qwikest/icons/font-awesome'
import HeaderStyle from "./Header.scss?inline";
import LogoHW2 from "../../assets/images/LogoHW2.png";

export default component$(() => {
  useStylesScoped$(HeaderStyle);
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
              <img class="logo" src={LogoHW2} alt="" />
            </Link>
          </li>
          <li class="iconWrapper">
            <Link href="/cart">
              {/* <i class="fa-solid fa-cart-shopping fa-xl"></i> */}
              <FaCartShoppingSolid class="icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="Search for a dish" />
    </div>
  );
});

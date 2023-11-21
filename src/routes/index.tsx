import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import homeStyle from "./index.scss?inline";
import logo from '../assets/images/LogoHW.png';

export default component$(() => {
  useStylesScoped$(homeStyle);
  return (
    <div class="home">
      <div class="logoArea">
        <img src={logo} alt="" />
        <div class="goBtn">
          <Link class="btn" href="/location">
            Go!
          </Link>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="26"
        viewBox="0 0 390 26"
        fill="none"
      >
        <path
          d="M0 25.6531V25.6531C127.796 -8.19853 262.204 -8.19853 390 25.6531V25.6531H0Z"
          fill="white"
        />
      </svg>
      <div class="homeInfo">
        <h1>Fancy food made simple!</h1>
        <p>
          We deliver healthy food for you and your family that lasts the whole
          week.
        </p>
        <div class="smallInfo">
          <i class="fa-solid fa-circle-check success"></i>
          <p class="xs">Re-used packaging - No waste</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Health Weekly",
  meta: [
    {
      name: "health Weekly",
      content: "Fancy foo made simple!",
    },
  ],
};

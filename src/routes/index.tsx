
import ImgLogohw from '~/assets/images/LogoHW.png?jsx';import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { FaCircleCheckSolid } from '@qwikest/icons/font-awesome'

import homeStyle from "./index.scss?inline";
import logo from "../assets/images/LogoHW.png";

export default component$(() => {
  useStylesScoped$(homeStyle);
  return (
    <div class="home">
      <div class="logoArea">
        <ImgLogohw alt="" />
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
          d="M0 26V26C127.768 -8.07137 262.232 -8.07137 390 26V26H0Z"
          fill="white"
        />
      </svg>
      <div class="homeInfo">
        <h1 class="text-center">Fancy food made simple!</h1>
        <p class="text-center">
          We deliver healthy food for you and your family that lasts the whole
          week.
        </p>
        <div class="smallInfo">
          <FaCircleCheckSolid class="success" />
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
  links: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap'
    },
    {
      rel: 'stylesheet',
      href: '../global.scss'
    },
  ],
};

import { component$, useStyles$, useStylesScoped$, $ } from "@builder.io/qwik";
import locationStyles from "./location.scss?inline";
import { UserLocation } from "~/components/UserLocation/UserLocation";
import { BigBtn } from "~/components/BigBtn/BigBtn";
import { FaLocationCrosshairsSolid } from "@qwikest/icons/font-awesome";
export default component$(() => {
  useStylesScoped$(locationStyles);

  return (
    <div class="location">
      <div class="mapArea">
          <button class="centerBtn btn">
            <FaLocationCrosshairsSolid />
          </button>
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
      <div class="locationInfo">
        <h1 class="text-center">Choose location!</h1>
        <p class="text-center">
          Where do you want us to deliver? You can always change this later.
        </p>
        <UserLocation />
      </div>
        <BigBtn path={'/products'}>Confirm</BigBtn>
    </div>
  );
});

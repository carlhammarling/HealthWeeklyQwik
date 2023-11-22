import { component$, useStylesScoped$ } from "@builder.io/qwik";
import UserLocationStyles from "./UserLocation.scss?inline";
import { FaLocationDotSolid, FaPenSolid } from "@qwikest/icons/font-awesome";

export const UserLocation = component$(() => {
  useStylesScoped$(UserLocationStyles);
  return (
    <div class="userLocation">
      <div class="adress">
        <FaLocationDotSolid class="icon" />
        <div>
          <p class="sharp">Södermalmstorg 1</p>
          <p class="light">12451, Stockholm</p>
        </div>
      </div>
      <button class="editBtn">
        <FaPenSolid />
      </button>
    </div>
  );
});

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import UserLocationStyles from './UserLocation.scss?inline'

export const UserLocation = component$(() => {
    useStylesScoped$(UserLocationStyles);
  return (
    <div class="userLocation">
    <div class="adress">
      <i class="fa-solid fa-location-dot fa-2xl"></i>
      <div>
        <p class="sharp">Södermalmstorg 1</p>
        <p class="light">12451, Stockholm</p>
      </div>
    </div>
    <i class="fa-solid fa-pen fa-xl"></i>
  </div>
  )
});
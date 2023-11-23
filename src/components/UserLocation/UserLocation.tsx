import { component$, useSignal, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import UserLocationStyles from "./UserLocation.scss?inline";
import { FaLocationDotSolid, FaPenSolid } from "@qwikest/icons/font-awesome";


interface Adress {
  street: string,
  postalCode: string,
}
export const UserLocation = component$(() => {
  useStylesScoped$(UserLocationStyles);

  const editLocation = useSignal(false);

  const adress: Adress = useStore({
    street: "Södermalmstorg 1",
    postalCode: "12451, Stockholm"
  })

  const formData: Adress = useStore({
    street: adress.street,
    postalCode: adress.postalCode
  })

  const handleSubmit = $(() => {
    adress.street = formData.street;
    adress.postalCode = formData.postalCode;
  })
  
  return (
    <div class="userLocation">
      {!editLocation.value ? (
        <>
          <div class="adress">
            <FaLocationDotSolid class="icon" />
            <div>
              <p class="sharp">{adress.street}</p>
              <p class="light">{adress.postalCode}</p>
            </div>
          </div>
          <button class="editBtn" onClick$={() => (editLocation.value = true)}>
            <FaPenSolid />
          </button>
        </>
      ) : (
        <form preventdefault:submit>
          <div class="inputGroup">
            <label class="p sharp" for="street">
              Street & number:
            </label>
            <input id="street" name="street" type="text" onInput$={(e) => (formData.street = (e.target as HTMLInputElement).value)} value={adress.street} />
          </div>
          <div class="inputGroup">
            <label class="p sharp" for="postalCodet">
              Postal code & city:
            </label>
            <input id="postalCode" name="postalCode" type="text" onInput$={(e) => (formData.postalCode = (e.target as HTMLInputElement).value)} value={adress.postalCode}/>
          </div>
          <div class="buttons">
            <button class="submit" onClick$={() => {handleSubmit(); editLocation.value = false}}>Save</button>
            <button class="cancel" onClick$={() => (editLocation.value = false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
});

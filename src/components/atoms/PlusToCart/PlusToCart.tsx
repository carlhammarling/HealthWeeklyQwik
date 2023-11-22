import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import { FaPlusSolid } from "@qwikest/icons/font-awesome";
import PlusToCartStyles from './PlusToCart.scss?inline';


export default component$((props: PlusToCartProps) => {
    useStylesScoped$(PlusToCartStyles);

    const handleClick = $(() => {
        console.log(props.id)
    });

  return (
    <button class="plusToCart" onClick$={() => handleClick()}>
      <FaPlusSolid />
    </button>
  );
});

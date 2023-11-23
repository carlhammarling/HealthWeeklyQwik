import { component$, useStylesScoped$, $, useContext } from "@builder.io/qwik";
import { FaPlusSolid } from "@qwikest/icons/font-awesome";
import PlusToCartStyles from './PlusToCart.scss?inline';
import { CartContext } from "~/root";


export default component$((props: PlusToCartProps) => {
    useStylesScoped$(PlusToCartStyles);

    const cartData: Cart = useContext(CartContext)
    const handleClick = $(() => {
        console.log(props.id)
        cartData.productIds.push(props.id);
        cartData.count = cartData.count + 1;
    });

  return (
    <button class="plusToCart" onClick$={() => handleClick()}>
      <FaPlusSolid />
    </button>
  );
});

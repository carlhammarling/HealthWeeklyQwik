import { component$, useContext, $ } from "@builder.io/qwik";
import { CartContext } from "~/contexts/cartContext";

export default component$(() => {
  const cartData = useContext(CartContext);

  const emptyCart = $(() => {
    cartData.productIds = [];
    cartData.count = 0;
  });

  const decreceCart = $(() => {
    if(cartData.count > 0) {
      cartData.productIds.pop();
      cartData.count--;
    }
  });

  return (
    <div>
      {cartData.productIds && cartData.productIds.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick$={emptyCart}>Empty Cart</button>
      <button onClick$={decreceCart}>Decrece cart</button>
    </div>
  );
});

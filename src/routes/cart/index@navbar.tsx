import { component$, useContext } from '@builder.io/qwik';
import { CartContext } from '~/contexts/cartContext';

export default component$(() => {
    const cartData = useContext(CartContext)
  return <div>{cartData.productIds}</div>
});
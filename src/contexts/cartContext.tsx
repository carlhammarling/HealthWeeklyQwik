import { type Signal, createContextId, useStore } from '@builder.io/qwik';


export const CartContext = createContextId<Cart>('cart-context');



export function useCartStore() {   

  const cart = useStore<Cart>({
    productIds: [],
    count: 0,
  });
    return cart;
}

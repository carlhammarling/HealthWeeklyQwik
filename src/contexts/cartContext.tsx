import { type Signal, createContextId, useStore } from '@builder.io/qwik';


export const CartContext = createContextId<Cart>('cart-context');


export function useCartStore() {   
    return useStore({
        productIds: [],
        count: 0
      });
}

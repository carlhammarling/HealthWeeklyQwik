import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { type Signal, useSignal, useContext, useContextProvider, createContextId, useStore } from '@builder.io/qwik';
import "./global.scss";





export const CartContext = createContextId<Cart>('cart-context');

export default component$(() => {

const cartState: Cart = useStore({
  productIds: [],
  count: 0
});


useContextProvider(CartContext, cartState)
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

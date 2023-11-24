import { component$, useContextProvider} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.scss";
import { CartContext, useCartStore } from "./contexts/cartContext";
import { SearchContext, useSearchStore } from "./contexts/searchContext";


export default component$(() => {

  const cartState = useCartStore();
  const searchState = useSearchStore();

useContextProvider(CartContext, cartState);
useContextProvider(SearchContext, searchState);
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

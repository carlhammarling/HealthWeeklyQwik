import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ProductCardStyles from "./ProductCard.scss?inline";

export default component$((item: Product) => {
  useStylesScoped$(ProductCardStyles);

  return (
    <div class="productCard" key={item.id}>
      <img src={item.img} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p class="xs">{item.description}</p>
        <p>{item.price} €</p>
        <p>{item.rating}</p>
      </div>
    </div>
  );
});

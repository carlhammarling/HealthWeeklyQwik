import { component$, useStyles$ } from "@builder.io/qwik";
import ProductCardStyles from "./ProductCard.scss?inline";
import Rating from "~/components/atoms/Rating/Rating";
import Allergens from "../Allergens/Allergens";
import PlusToCart from "~/components/atoms/PlusToCart/PlusToCart";



export default component$((item: Product) => {
  useStyles$(ProductCardStyles)

  return (
    <div class="productCard" key={item.id}>
      <div class="imgContainer">
      <img src={item.img} alt={item.name} />
      <PlusToCart id={item.id}/>
      </div>
      <div class="prodInfo">
        <div>
          <h2>{item.name}</h2>
          <Rating rating={item.rating}/>
        </div>
        <p class="xs">{item.description}</p>
        <Allergens allergens={item.allergens} />
        <p class="s">{item.price} €</p>
      </div>
    </div>
  );
});

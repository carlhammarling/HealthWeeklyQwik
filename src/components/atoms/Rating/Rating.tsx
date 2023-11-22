import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { FaStarSolid } from "@qwikest/icons/font-awesome";
import RatingStyles from './Rating.scss?inline'


export default component$((props: RatingProps) => {
    useStylesScoped$(RatingStyles);
  return (
    <p class="xs sharp rating">
      <FaStarSolid /> {props.rating.toFixed(1)}
    </p>
  );
});

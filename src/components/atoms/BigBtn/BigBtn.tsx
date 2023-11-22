import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import BigBtnStyles from './BigBtn.scss?inline';
import { useNavigate } from "@builder.io/qwik-city";

type BigBtnProps = {
    path: string;
}

export const BigBtn = component$((props: BigBtnProps) => {
    useStylesScoped$(BigBtnStyles);
   const navigate = useNavigate()
  return (
    <div class="bigBtn p">
      <button onClick$={() => navigate(props.path)}><Slot /></button>
    </div>
  );
});

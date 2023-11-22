import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import CategoryRowStyles from './CategoryRow.scss?inline';

export default component$(() => {
    useStylesScoped$(CategoryRowStyles);

const active = useSignal('All');    
const categories: Categories = useStore<Categories>(['All', 'Fish', 'Vegeterian', 'LCHF', 'Chicken', 'Meat']);
  return (
    <div class="categoryRow">
      <ul>
        {categories && categories.map((item, index) => (
        <li key={index} onClick$={() => active.value = item} class={`categoryAtom ${active.value === item ? 'active' : ''}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

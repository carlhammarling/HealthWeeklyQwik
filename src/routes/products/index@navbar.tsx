// File: src/routes/product/[skuId]/index.tsx
import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import CategoryRow from "~/components/CategoryRow/CategoryRow";
import ProductCard from "~/components/ProductCard/ProductCard";
import ProductsStyles from './products.scss?inline'


export default component$(() => {
  useStylesScoped$(ProductsStyles)

  const products: Product[] = useStore<Product[]>([
    {
    id: "0",
    name: "Aloo Gobi",
    description: "Indian dish made with potatoes, cauliflower, spices and herbs.",
    allergens: ["Vegeterian", "Dairy"],
    categories: ["Vegeterian"],
    ingredients: "Potatoes, cauliflower, curry sauce served with rice.",
    price: 12,
    img: "https://images.pexels.com/photos/15014920/pexels-photo-15014920/free-photo-of-mat-middag-lunch-maltid.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
  },
    {
    id: "1",
    name: "Veggie Lasagna",
    description: "Made with meaty shiitake , spinach and mozzarella cheese.",
    allergens: ["Vegeterian"],
    categories: ["Vegeterian"],
    ingredients: "Shiitake , spinach and mozzarella cheese.",
    price: 10,
    img: "https://images.pexels.com/photos/4079522/pexels-photo-4079522.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
  },
    {
    id: "2",
    name: "Roasted Lamb Racks",
    description: "Garlic-Crusted Roast Rack of Lamb with roasted potatoes.",
    allergens: ["Meat"],
    categories: ["Meat"],
    ingredients: "Lamb and potatoes.",
    price: 13,
    img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
  },
]
  )
  return (
    <div class="products">
      <CategoryRow />
      <div class="productsList">
        {products && products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

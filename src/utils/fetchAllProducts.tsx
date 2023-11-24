import { routeLoader$ } from "@builder.io/qwik-city";

//GÅr det inte att fetcha såhär?

export const fetchAllProducts = routeLoader$(async() => {
    try {
      const res = await fetch("http://localhost:3000/products");
      
      if(res.ok) {
        const data = await res.json();    
        return data as Product[];
      }
    } catch (error) {
      console.log(error);
    }
  });
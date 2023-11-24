
export async function fetchSearchResults(searchReq: string): Promise<Product[]> {

    if (searchReq.length < 2) {
      return [];
    }
    const res = await fetch("http://localhost:3000/products");
    const data: Product[] = await res.json();


    //Later on extract this to the backend and only fetch what is filtered out
    const matches: Product[] = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchReq.toLowerCase()) ||
        item.ingredients.toLowerCase().includes(searchReq.toLowerCase()) ||
        item.allergens.some(al => al.toLowerCase().includes(searchReq.toLowerCase())) ||
        item.categories.some(ing => ing.toLowerCase().includes(searchReq.toLowerCase())) 
    );
    return matches;
  };









// När hela kördes inne i komponenten

  // const searchResult = useResource$<any>(async ({ track, cleanup }) => {
  //   //Här kör vi en track(som useEffect) där vi t.ex. kan påverka med en if-sats när vi vill göra API-req.
  //   const searchReq = track(() => search.searchInput);
  //   const abortController = new AbortController();

  //   if (searchReq.length < 2) {
  //     return;
  //   }
  //   const res = await fetch("http://localhost:3000/products");
  //   const data: Product[] = await res.json();


  //   //Later on extract this to the backend
  //   const matches: Product[] = data.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(searchReq.toLowerCase()) ||
  //       item.ingredients.toLowerCase().includes(searchReq.toLowerCase()) ||
  //       item.allergens.some(al => al.toLowerCase().includes(searchReq.toLowerCase())) ||
  //       item.categories.some(ing => ing.toLowerCase().includes(searchReq.toLowerCase())) 
  //   );
  //   return matches;
  // });
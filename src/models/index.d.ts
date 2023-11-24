interface Product {
    id: string,
    name: string,
    description: string,
    allergens: string[],
    categories: string[],
    ingredients: string,
    price: number,
    img: string,
    rating: number,
};

type Categories = string[];

interface Cart {
    productIds: string[],
    count: number
  };

  interface Search {
    searchInput: string;
  }
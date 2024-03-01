// import { matchSorter } from "match-sorter";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  amount?: number;
};

export async function getProducts(query?: number) {
  let products: Product[];
  if (query) {
    products = await fetch(
      `https://fakestoreapi.com/products?limit=${query}`
    ).then((res) => res.json());

    return { products };
  } else {
    products = await fetch(`https://fakestoreapi.com/products`).then((res) =>
      res.json()
    );
    // TODO implement search
    // if (query && typeof query === "string") {
    //   console.log(products);
    //   return matchSorter(products, query, { keys: ["title"] });
    // }
    return { products };
  }
}
export async function getProduct(id: number) {
  const product: Product = await fetch(
    `https://fakestoreapi.com/products/${id.toString()}`
  ).then((res) => res.json());
  return product;
}

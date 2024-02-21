export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export async function getProducts(amount?: number) {
  let products: Product[];
  if (amount) {
    products = await fetch(
      `https://fakestoreapi.com/products?limit=${amount}`
    ).then((res) => res.json());
    return { products };
  } else {
    products = await fetch(`https://fakestoreapi.com/products`).then((res) =>
      res.json()
    );
    return { products };
  }
}

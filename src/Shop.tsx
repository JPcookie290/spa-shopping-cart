import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Product, getProducts } from "./handleProducts";

export async function loader() {
  const products = await getProducts();

  return products;
}

export default function Shop() {
  const { products } = useLoaderData() as { products: Product[] };

  return (
    <>
      <Header />
      <div id="products-list">
        {products.map((product) => [
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="img-index"
            />
            <div className="product-description">
              <h2>{product.title}</h2>
              <h3>{product.category}</h3>
              <p>{product.description}</p>
              <h2>{product.price}€</h2>

              <button>add to cart</button>
            </div>
          </div>,
        ])}
      </div>
      <Footer />
    </>
  );
}

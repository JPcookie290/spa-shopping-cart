import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Product, getProducts } from "./handleProducts";

export async function loader() {
  const products = await getProducts(3);

  return products;
}

export default function Index() {
  const { products } = useLoaderData() as { products: Product[] };

  return (
    <>
      <Header />
      <div id="products-sample">
        {products.map((product) => [
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="img-index"
            />
            <div className="index-description">
              <h2>{product.title}</h2>
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

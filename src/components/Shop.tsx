import { useLoaderData, Link } from "react-router-dom";
import { useContext } from "react";
import { Product, getProducts } from "./handleProducts";
import CartContext from "./CartContext";
import { Button } from "@mui/material";

export async function loader() {
  //TODO add search function
  // export async function loader({ request }: { request: Request }) {
  // const url = new URL(request.url);
  // const term = url.searchParams.get("term");
  // const products = await getProducts(term!);
  const products = await getProducts();

  return products;
}

export default function Shop() {
  const { products } = useLoaderData() as { products: Product[] };
  const [, , handleAdd] = useContext(CartContext);

  return (
    <div className="products">
      <img
        className="header-img"
        src="https://img.freepik.com/free-photo/trendy-clothes-showcased-boutique-store_157027-3463.jpg?t=st=1709203614~exp=1709207214~hmac=9ed0b7062100bafb9d46a16b3a3c107a441179550aaa1ef047e932c4ce25ee3a&w=1380"
        alt=""
      />
      {/* <Form id="search-form" role="search">
        <input
          type="search"
          name="term"
          id="term"
          placeholder="search..."
          typeof="search"
        />
      </Form> */}
      <div id="products-list">
        {products.map((product) => [
          <div key={product.id} className="product-card-shop">
            <div className="product-description">
              <div>
                <h2>{product.title}</h2>
                <h3>{product.category}</h3>
                <Link to={`/shop/${product.id}`}>
                  <Button
                    variant="text"
                    size="small"
                    style={{ color: "#611c35", width: "fit-content" }}
                  >
                    details
                  </Button>
                </Link>
              </div>

              <div className="view-shop">
                <h2>{product.price.toFixed(2)}€</h2>

                <Button
                  variant="contained"
                  size="small"
                  style={{ color: "white", background: "#003049" }}
                  onClick={() => handleAdd(product)}
                >
                  add to cart
                </Button>
              </div>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="img-index"
            />
          </div>,
        ])}
      </div>
    </div>
  );
}

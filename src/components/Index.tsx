import { useLoaderData, Link } from "react-router-dom";
import { useContext } from "react";
import { Product, getProducts } from "./handleProducts";
import CartContext from "./CartContext";
import { Button } from "@mui/material";

export async function loader() {
  const products = await getProducts(3);

  return products;
}

export default function Index() {
  const { products } = useLoaderData() as { products: Product[] };
  const [, , handleAdd] = useContext(CartContext);

  return (
    <>
      <img
        className="header-img"
        src="https://img.freepik.com/free-photo/still-life-with-details-festive-easter-decor-inscription-happy-easter-postcard_169016-10539.jpg?w=1380&t=st=1709206070~exp=1709206670~hmac=56c492bc926cd87d6d6267725a0b70565f7c6b167da630d4bc77c783f6b03a1d"
        alt=""
      />
      <h2 className="rec-heading">Our Recommendation:</h2>
      <div id="products-sample">
        {products.map((product) => [
          <div key={product.id} className="product-card-index">
            <img
              src={product.image}
              alt={product.title}
              className="img-index"
            />
            <div className="index-description">
              <div>
                <h2>{product.title}</h2>
                <Link to={`/shop/${product.id}`}>
                  <Button
                    variant="text"
                    size="small"
                    style={{ color: "#611c35" }}
                  >
                    details
                  </Button>
                </Link>
                <h2>{product.price.toFixed(2)}€</h2>
              </div>

              <Button
                variant="contained"
                size="small"
                style={{
                  color: "white",
                  background: "#003049",
                  width: "fit-content",
                }}
                onClick={() => handleAdd(product)}
              >
                add to cart
              </Button>
            </div>
          </div>,
        ])}
      </div>
    </>
  );
}

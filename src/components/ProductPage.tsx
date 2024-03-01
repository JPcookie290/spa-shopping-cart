import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Product, getProduct } from "./handleProducts";
import CartContext from "./CartContext";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export async function loader({ params }: { params: { id: number } }) {
  const product = await getProduct(params.id);
  return { product };
}

export default function ProductPage() {
  const { product } = useLoaderData() as { product: Product };
  const [, , handleAdd] = useContext(CartContext);
  const goBack = useNavigate();
  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="img-product" />
      <div className="product-info">
        <div className="product-page-description">
          <h1>{product.title}</h1>
          <h3>Category: {product.category}</h3>

          <p>{product.description}</p>
          <Button
            variant="text"
            size="small"
            style={{ color: "#611c35" }}
            startIcon={<ArrowBackIcon />}
            onClick={() => goBack(-1)}
          >
            back
          </Button>
        </div>
        <div className="product-end">
          <div className="product-price">
            <h2>Price:</h2>
            <h2>{product.price.toFixed(2)}€</h2>
          </div>
          <div className="product-button">
            <Button
              variant="contained"
              size="medium"
              style={{ color: "white", background: "#003049" }}
              onClick={() => handleAdd(product)}
            >
              add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

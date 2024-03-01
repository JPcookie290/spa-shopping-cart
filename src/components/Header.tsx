import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <div id="header">
      <div id="header-right">
        <LocalMallIcon style={{ color: "white", fontSize: "80px" }} />
        <h1>Welcome to our Shop!</h1>
      </div>
      <div id="nav-header">
        <Link className="nav-text" to={`/`}>
          Home
        </Link>
        <Link className="nav-text" to={`/shop`}>
          Shop
        </Link>
        {cart?.length !== 0 && (
          <Link to={`/cart`}>
            <ShoppingCartIcon style={{ color: "white" }} fontSize="large" />
          </Link>
        )}
      </div>
    </div>
  );
}

import { useContext } from "react";
import CartContext from "./CartContext";
import {
  Button,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

export default function Cart() {
  const [cart, , handleAdd, handleDelete, handleRemove, handlePrice] =
    useContext(CartContext);
  return (
    <div className="cart">
      <h1>Cart:</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart!.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                <h3>{item.title}</h3>
              </TableCell>
              <TableCell>
                <div className="product-amount">
                  <IconButton onClick={() => handleRemove(item)}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <p>{item.amount}</p>
                  <IconButton onClick={() => handleAdd(item)}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <h3>{(item.amount! * item.price).toFixed(2)}€</h3>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <h2>Total</h2>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <h2>{handlePrice().toFixed(2)}€</h2>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Button
                variant="outlined"
                style={{ color: "black" }}
                onClick={() => console.log(cart)}
                size="large"
              >
                Checkout
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

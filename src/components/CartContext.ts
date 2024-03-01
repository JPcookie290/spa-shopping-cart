import { createContext, Dispatch, SetStateAction } from "react";
import { Product } from "./handleProducts";

type CartContextType = [
  Product[] | null,
  Dispatch<SetStateAction<Product[]>>,
  handleAdd: (product: Product) => void,
  handleDelete: (id: number) => void,
  handleRemove: (product: Product) => void,
  handlePrice: () => number
];

const CartContext = createContext<CartContextType>([
  null,
  () => {},
  () => {},
  () => {},
  () => {},
  () => 0.0,
]);

export default CartContext;

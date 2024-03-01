import { ReactNode, useState } from "react";
import { Product } from "./handleProducts";
import CartContext from "./CartContext";

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function handleAdd(product: Product) {
    const cartCopy = [...cart];
    const checkDuplicate = cartCopy.findIndex((item) => item.id === product.id);
    if (checkDuplicate === -1) {
      (product.amount = 1), cartCopy.push(product);
    } else product.amount!++;
    setCart(cartCopy);
  }

  function handleDelete(productId: number) {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  }

  function handleRemove(product: Product) {
    const cartCopy = [...cart];
    if (product.amount === 1) {
      handleDelete(product.id);
    } else {
      const productIndex = cart.findIndex((item) => item.id === product.id);
      cartCopy[productIndex].amount! -= 1;
      setCart(cartCopy);
    }
  }

  function handlePrice() {
    // const cartCopy = [...cart]
    let totalAmount = 0;
    cart.map((item) => (totalAmount += item.price * item.amount!));
    return parseFloat(totalAmount.toFixed(2));
  }

  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        handleAdd,
        handleDelete,
        handleRemove,
        handlePrice,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}

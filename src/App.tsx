import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index, { loader as productSampleLoader } from "./components/Index";
import ErrorPage from "./components/ErrorPage";
import Shop, { loader as productLoader } from "./components/Shop";
import RootElement from "./components/RootElement";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import ProductPage, {
  loader as singleProductLoader,
} from "./components/ProductPage";
import "@fontsource/roboto";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: productSampleLoader,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: productLoader,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/shop/:id",
          element: <ProductPage />,
          loader: singleProductLoader as any,
        },
      ],
    },
  ]);

  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;

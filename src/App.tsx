import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Index";
import ErrorPage from "./ErrorPage";
import { loader as productSampleLoader } from "./Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      loader: productSampleLoader,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

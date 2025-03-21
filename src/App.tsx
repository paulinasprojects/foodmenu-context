import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./lib/routes";
import CartProvider from "./context/cart-context";

const router = createBrowserRouter(routes);

export default function App() {
  return (
   <CartProvider>
      <RouterProvider router={router}/>
   </CartProvider>
  )
}
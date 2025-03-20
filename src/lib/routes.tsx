import { Layout } from "../layouts/layout";
import { CartPage } from "../pages/cart-page";
import { HomePage } from "../pages/home-page";
import { NotFoundPage } from "../pages/not-found-pages";
import { ProductPage } from "../pages/product-page";

export const routes = [
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/:url",
        element: <ProductPage/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
    ]
  },
]
import { Products } from "@/pages/products";
import ProductsDataProvider from "@/pages/products/ProductsDataProvider";
import { RouteObject } from "react-router-dom";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Store } from "../pages/store/Store";
import StoreDataProvider from "../pages/store/StoreDataProvider";
import { Us } from "../pages/us";
import { Cart } from "@/pages/cart";
import { Checkout } from "@/pages/checkout";

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/us",
    element: <Us />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/store",
    element: (
      <StoreDataProvider>
        {({ error, isLoading, response }) => (
          <Store isLoading={isLoading} response={response} error={error} />
        )}
      </StoreDataProvider>
    ),
  },

  {
    path: "/products/collection/:id",
    element: (
      <ProductsDataProvider>
        {({ error, isLoading, response }) => (
          <Products isLoading={isLoading} response={response} error={error} />
        )}
      </ProductsDataProvider>
    ),
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <Checkout />
  }
];

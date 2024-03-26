import axios from "@/axios-config";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Cart } from "@/pages/cart";
import { Checkout } from "@/pages/checkout";
import { Products } from "@/pages/products";
import { RouteObject } from "react-router-dom";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Store } from "../pages/store/Store";
import { Us } from "../pages/us";

export const Routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/us",
		element: <Us />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/store",
		element: <Store />,
		loader: () => {
			return axios.request({
				url: "/collections",
				method: "GET",
			});
		},
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/products/collection/:id",
		element: <Products />,
		loader: ({ params }) => {
			return axios.request({
				url: `/products/collection`,
				method: "GET",
				params: { collectionId: params.id },
			});
		},
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/cart",
		element: <Cart />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
		errorElement: <ErrorBoundary />,
	},
];

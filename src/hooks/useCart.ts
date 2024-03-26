import { cartAtom, orderSummaryAtom } from "@/utils/atoms/atoms";
import { CollectionProducts as Product } from "@/utils/types";
import { atom, useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

export const cartItemsQuantityAtom = atom((get) => {
	const cart = get(cartAtom);
	return cart.reduce((total) => total + 1, 0);
});

export const useCart = () => {
	const [cart, setCart] = useAtom(cartAtom);
	const cartLength = useAtomValue(cartItemsQuantityAtom);
	const orderSummary = useAtomValue(orderSummaryAtom);

	const addProduct = useCallback(
		(product: Product) => {
			const currentCartItem = cart.find(
				(cartItem) => cartItem.product.id === product.id,
			);
			if (!currentCartItem) {
				setCart([...cart, { product, quantity: 1 }]);
			} else {
				const newCart = cart.map((cartItem) => {
					if (cartItem.product.id === product.id) {
						return { ...cartItem, quantity: cartItem.quantity + 1 };
					}
					return cartItem;
				});
				setCart(newCart);
			}
		},
		[cart, setCart],
	);

	const removeProduct = (product: Product) => {
		const filteredCart = cart.filter(
			(cartItem) => cartItem.product.id !== product.id,
		);
		setCart(filteredCart);
	};

	const updateCartItemQuantity = (product: Product, quantity: number) => {
		const newCart = cart.map((cartItem) => {
			if (cartItem.product.id === product.id) {
				return { ...cartItem, quantity: quantity };
			}
			return cartItem;
		});
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};
	return {
		cart,
		addProduct,
		clearCart,
		removeProduct,
		cartLength,
		updateCartItemQuantity,
		orderSummary,
	};
};

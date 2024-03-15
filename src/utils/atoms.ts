import { atom } from "jotai";
import { CollectionProducts as Product } from "./types";
import { atomWithStorage } from "jotai/utils";

export interface CartAtom {
	product: Product;
	quantity: number;
}
export const cartAtom = atomWithStorage<CartAtom[]>("cart", []);

export const orderSummaryAtom = atom((get) => {
	const cart = get(cartAtom);
	const total = cart.reduce((total, cartItem) => {
		return total + cartItem.product.price * cartItem.quantity;
	}, 0);
	return total;
});

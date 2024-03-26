import { atom } from "jotai";
import { CollectionProducts } from "../types";

interface CollectionProductsAtom {
	filtered: CollectionProducts[] | null;
	all: CollectionProducts[];
}

const collectionProductsAtom = atom<CollectionProductsAtom>({
	filtered: [],
	all: [],
});

export const writeOnlySetInitialCollectionProductsAtom = atom(
	null,
	(_get, set, update: CollectionProducts[]) => {
		set(collectionProductsAtom, {
			filtered: null,
			all: update,
		});
	},
);

export const filterCollectionProductsByCategoryAtom = atom(
	null,
	(get, set, categoryName: string | null) => {
		console.log(
			"🚀🩷​ ~ file: collection-products-atom.ts:27 ~ categoryId:",
			categoryName,
		);
		if (categoryName === null) {
			set(collectionProductsAtom, {
				filtered: null,
				all: get(collectionProductsAtom).all,
			});
			return;
		}
		const all = get(collectionProductsAtom).all;
		const filtered = all.filter(
			(product) =>
				product.category.name.toLowerCase() === categoryName.toLowerCase(),
		);
		set(collectionProductsAtom, {
			filtered: filtered,
			all,
		});
	},
);
export const readOnlyCollectionProductsAtom = atom((get) => {
	return get(collectionProductsAtom);
});

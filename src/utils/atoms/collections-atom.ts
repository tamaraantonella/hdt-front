import { atom } from "jotai";
import { Collection } from "../types";

const collectionsAtom = atom<Collection[]>([]);

export const writeOnlyCollectionsAtom = atom(
	null,
	(_get, set, update: Collection[]) => {
		set(collectionsAtom, update);
	},
);

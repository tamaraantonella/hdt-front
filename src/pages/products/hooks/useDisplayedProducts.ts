import { readOnlyCollectionProductsAtom } from "@/utils/atoms/collection-products-atom";
import { CollectionProducts } from "@/utils/types";
import { useAtomValue } from "jotai";
import { useCallback, useMemo } from "react";

const useDisplayedRows = (sortDirection: string) => {
	const { all, filtered } = useAtomValue(readOnlyCollectionProductsAtom);

	const sortCompareFunction = useCallback(
		(productA: CollectionProducts, productB: CollectionProducts) => {
			if (sortDirection === "asc") {
				return productA.name.localeCompare(productB.name);
			} else {
				return productB.name.localeCompare(productA.name);
			}
		},
		[sortDirection],
	);

	return useMemo(() => {
		const rowsDisplayed = filtered ? filtered : all;
		if (rowsDisplayed.length === 0) return [];
		const sortedRows = rowsDisplayed.slice().sort(sortCompareFunction);
		return sortedRows;
	}, [filtered, all, sortCompareFunction]);
};

export default useDisplayedRows;

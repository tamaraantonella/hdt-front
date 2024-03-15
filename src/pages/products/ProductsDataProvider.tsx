/* eslint-disable @typescript-eslint/no-explicit-any */
import useApiRequest from "@/hooks/useApiRequest";
import { CollectionProducts } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { IProductDataProvider } from "./products.types";
import { isStoreOpen } from "@/utils/utils";

const ProductsDataProvider: React.FC<IProductDataProvider> = ({ children }) => {
	const { request } = useApiRequest();
	const { id } = useParams();
	const isOpenValue = isStoreOpen();

	const { isLoading, error, data } = useQuery<CollectionProducts[], Error>({
		queryKey: ["category", id],
		queryFn: async () =>
			request<CollectionProducts[]>({
				url: `/products/collection`,
				method: "GET",
				params: { collectionId: id },
			}),
		staleTime: 1000 * 60 * 5,
		enabled: !!isOpenValue,
	});

	return children({
		isLoading,
		response: data,
		error,
		isStoreOpen: isOpenValue,
	});
};

export default ProductsDataProvider;

import { ProductCard } from "@/components/ProductCard";
import {
	filterCollectionProductsByCategoryAtom,
	writeOnlySetInitialCollectionProductsAtom,
} from "@/utils/atoms/collection-products-atom";
import { Category, CollectionProducts } from "@/utils/types";
import { isStoreOpen } from "@/utils/utils";
import {
	Box,
	Button,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useSetAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useDisplayedRows from "./hooks/useDisplayedProducts";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export const Products: React.FC = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] =
		useState<Category["name"]>("all");
	const [orderSort, setOrderSort] = useState<string>("asc");
	const filterProductsByCategory = useSetAtom(
		filterCollectionProductsByCategoryAtom,
	);
	const loaderResponse = useLoaderData() as { data: CollectionProducts[] };
	const productsToDisplay = useDisplayedRows(orderSort);

	const setInitialCollectionProducts = useSetAtom(
		writeOnlySetInitialCollectionProductsAtom,
	);
	const isOpenValue = isStoreOpen();

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedCategory(event.target.value as string);
		if (event.target.value === "all") {
			filterProductsByCategory(null);
			return;
		}
		filterProductsByCategory(event.target.value);
	};

	const handleSort = (event: SelectChangeEvent) => {
		setOrderSort(event.target.value as string);
	};

	useEffect(() => {
		if (categories.length === 0) {
			setInitialCollectionProducts(loaderResponse.data);
			const categories = loaderResponse.data.map((product) => product.category);
			const uniqueCategories = Array.from(
				new Set(categories.map((category) => category.name)),
			);
			setCategories(uniqueCategories);
		}
	}, [orderSort, productsToDisplay, selectedCategory, orderSort]);

	if (!isOpenValue) {
		return (
			<Box>
				<h1>Lo sentimos, la tienda se encuentra cerrada.</h1>
			</Box>
		);
	}

	return (
		<>
			<div className="flex justify-end">
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#56694b",
						color: "#ffffff",
						":hover": { backgroundColor: "#2e4c16" },
						width: "fit-content",
					}}
					onClick={() => window.history.back()}
				>
					<ArrowLeftIcon className="h-4 mr-3" /> Volver
				</Button>
			</div>
			{categories.length > 0 && (
				<Box display="grid" margin="20px 0px">
					<FormControl
						fullWidth
						sx={{ minWidth: 120, maxWidth: 350 }}
						variant="standard"
					>
						<Select
							id="select-category"
							value={selectedCategory}
							onChange={handleChange}
							className="w-full capitalize"
						>
							<MenuItem value="all" sx={{ textTransform: "capitalize" }}>
								Todos
							</MenuItem>
							{categories.map((category) => (
								<MenuItem
									key={category}
									value={category}
									sx={{ textTransform: "capitalize" }}
								>
									{category}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl
						fullWidth
						sx={{ minWidth: 120, maxWidth: 350 }}
						variant="standard"
					>
						<Select
							id="order-sort"
							value={orderSort}
							onChange={handleSort}
							className="w-full capitalize"
						>
							<MenuItem value="asc" sx={{ textTransform: "capitalize" }}>
								Orden A-Z
							</MenuItem>
							<MenuItem value="desc" sx={{ textTransform: "capitalize" }}>
								Orden Z-A
							</MenuItem>
						</Select>
					</FormControl>
				</Box>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-screen">
				{productsToDisplay.length > 0 ? (
					<>
						{productsToDisplay.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</>
				) : (
					<h5>No hay productos para mostrar.</h5>
				)}
			</div>
		</>
	);
};

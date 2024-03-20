import React from "react";
import { StoreProps } from "./store.types";
import { PageTitle } from "@/components/PageTitle";
import { CollectionContainer } from "./components/CollectionContainer";
import { Spinner } from "@/components/Spinner";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export const Store: React.FC<StoreProps> = ({
	response,
	isLoading,
	isStoreOpen,
}) => {
		useEffect(() => {
			AOS.init({ duration: 2000 });
		});

	if (!isStoreOpen) {
		return (
			<div className="flex flex-col text-center">
				<PageTitle title="Tienda" id="productos" />
				<h1>La tienda se encuentra cerrada</h1>
				<p>Los pedidos en la tienda se pueden hacer:</p>
				<p>Los días lunes para retirar los días miércoles</p>
				<p>Los días jueves para retirar los días sabados</p>
			</div>
		);
	}
	if (isLoading) return <Spinner />;
	return (
		<div data-aos="fade-up" className="flex flex-col">
			<PageTitle title="Tienda" id="productos" />
			{response?.data && <CollectionContainer collections={response.data} />}
		</div>
	);
};

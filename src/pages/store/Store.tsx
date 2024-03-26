import { PageTitle } from "@/components/PageTitle";
import { Collection, FetchWrapper } from "@/utils/types";
import { isStoreOpen } from "@/utils/utils";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CollectionContainer } from "./components/CollectionContainer";
import { useSetAtom } from "jotai";
import { writeOnlyCollectionsAtom } from "@/utils/atoms/collections-atom";

export const Store: React.FC = () => {
	const isStore = isStoreOpen();
	const loaderResponse = useLoaderData() as { data: FetchWrapper<Collection> };
	const updateCollections = useSetAtom(writeOnlyCollectionsAtom);

	useEffect(() => {
		updateCollections(loaderResponse.data.data || []);
		AOS.init({ duration: 1000 });
	});

	if (!isStore) {
		return (
			<div className="flex flex-col md:flex-row justify-center items-center min-h-hv">
				<img
					src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1711382367/delTomate/Historia_de_Instagram_Cartel_Cerrado_por_Vacaciones_de_Invierno_Minimalista_Celeste-removebg-preview_aew3li.png"
					alt="Cartel cerrado por vacaciones de invierno"
					className="w-96 h-96 mx-auto object-cover animate-pulse object-center"
				/>
				<div className="w-full max-w-72 text-main rounded-lg p-5 flex-col gap-6">
					<Typography variant="h4">
						Los pedidos en la tienda se pueden hacer:
					</Typography>
					<Typography variant="subtitle1">
						👉​Los días lunes para retirar los días miércoles
					</Typography>
					<Typography variant="subtitle1">
						👉Los días jueves para retirar los días sabados
					</Typography>
				</div>
			</div>
		);
	}
	return (
		<div data-aos="fade-up" className="flex flex-col">
			<PageTitle title="Tienda" id="productos" />
			{loaderResponse.data?.data && (
				<CollectionContainer collections={loaderResponse.data.data} />
			)}
		</div>
	);
};

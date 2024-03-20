import { Collection } from "@/utils/types";
import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

interface CollectionCardProps {
	collection: Collection | "all";
}
const defaultImg =
	"https://res.cloudinary.com/dfbxjt69z/image/upload/v1662129293/delTomate/banner_ubxf59.jpg";

export const CollectionCard: React.FC<CollectionCardProps> = ({
	collection,
}) => {
	const imageUrl =
		collection === "all"
			? defaultImg
			: collection.imageUrl
				? collection.imageUrl
				: defaultImg;
	return (
		<Link
			to={
				collection === "all"
					? "/products/collection"
					: `/products/collection/${collection.id}`
			}
			key={collection === "all" ? "all" : collection.id}
		>
			<Card placeholder={undefined} className="mt-10 w-80 h-52 shadow-2xl lg:w-80">
				<CardHeader
					placeholder={undefined}
					color="blue-gray"
					className="relative h-56"
				>
					<img
						src={imageUrl}
						alt="card-image"
						className="h-full w-full object-cover object-center"
					/>
				</CardHeader>
				<CardBody placeholder={undefined}>
					<Typography
						placeholder={undefined}
						variant="h5"
						color="blue-gray"
						className="mb-2 capitalize"
					>
						{collection === "all" ? "Todos los productos" : collection.name}
					</Typography>
				</CardBody>
			</Card>
		</Link>
	);
};

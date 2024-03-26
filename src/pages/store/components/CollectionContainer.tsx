import { Collection } from "@/utils/types";
import { CollectionCard } from "./CollectionCard";

interface CollectionContainerProps {
	collections: Collection[];
}

export const CollectionContainer: React.FC<CollectionContainerProps> = ({
	collections,
}) => {
	return (
		<div className="flex flex-col md:grid gap-3 md:grid-cols-2 xl:grid-cols-3 mt-8">
			{collections.map((collection) => (
				<CollectionCard key={collection.id} collection={collection} />
			))}
			<CollectionCard key="all" collection="all" />
		</div>
	);
};

import { CollectionProducts } from "@/utils/types";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { QuantityButton } from "./QuantityButton";
import { useCart } from "@/hooks/useCart";

interface CartItemProps {
	product: CollectionProducts;
	quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
	const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
	const { removeProduct } = useCart();
	const img = product.imageUrl
		? product.imageUrl
		: "https://res.cloudinary.com/dfbxjt69z/image/upload/v1662125764/delTomate/deltomate-logo_pxslmj.png";

	useEffect(() => {
		setUpdatedQuantity(quantity);
	}, []);

	return (
		<div
			key={product.id}
			className="flex flex-row text-center items-center text-md mx-0 text-gray-800 border border-gray-300 py-2 lg:max-w-6xl rounded-3xl mb-3"
		>
			<div className=" lg:flex">
				<div className="h-28">
					<img src={img} className="col-span-2 row-span-3 w-28 lg:w-32" />
				</div>
				<Button
					placeholder={product.name}
					variant="text"
					className="capitalize -mt-5 lg:mt-0 text-xs text-blue-500 font-semibold w-fit active:bg-white pb-0 hover:bg-white hover:text-main"
					onClick={() => removeProduct(product)}
				>
					Eliminar
				</Button>
			</div>
			<div className="lg:flex lg:items-center lg:gap-16">
				<Typography
					placeholder={product.name}
					className="capitalize col-span-8 w-40 font-medium"
				>
					{product.name}
				</Typography>

				<Typography
					placeholder={product.name}
					variant="small"
					className="flex items-center"
				>
					<QuantityButton
						quantity={updatedQuantity}
						setQuantity={setUpdatedQuantity}
						product={product}
						key={product.id}
						showUnit={true}
					/>
				</Typography>

				<Typography
					placeholder={product.name}
					variant="small"
					className="col-span-4 text-2xl font-bold lg:col-span-2 text-center px-5 py-1 mt-5 -mb-2 lg:mb-0 lg:mt-0"
				>
					${product.price * quantity}
				</Typography>
			</div>
		</div>
	);
};

import { useCart } from "@/hooks/useCart";
import { CollectionProducts } from "@/utils/types";
import { getSaleUnit } from "@/utils/utils";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { QuantityButton } from "./QuantityButton";

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
	}, [quantity]);

	return (
		<div
			key={product.id}
			className="flex flex-row text-center items-center text-md mx-0 text-gray-800 border border-gray-300 lg:max-w-6xl rounded-3xl mb-3 p-5 gap-5"
		>
			<div className="lg:flex flex-col">
				<div className="h-24 w-24 rounded-md overflow-hidden">
					<img
						src={img}
						className="col-span-2 row-span-3lg:w-32 object-cover object-center w-full h-full"
					/>
				</div>
				<Button
					placeholder={product.name}
					variant="text"
					className="capitalize mt-1 lg:mt-0 text-xs text-blue-500 font-semibold w-fit active:bg-white pb-0 hover:bg-white hover:text-main"
					onClick={() => removeProduct(product)}
				>
					Eliminar
				</Button>
			</div>
			<div className="lg:flex flex-col justify-stretch w-full">
				<Typography
					placeholder={product.name}
					className="capitalize md:w-40 w-full font-medium text-start text-sm"
				>
					{product.name}
				</Typography>
				<Typography
					placeholder={product.price}
					className="md:w-40 w-full text-start text-sm"
				>
					Precio x {getSaleUnit(product.saleUnit)} ${product.price}
				</Typography>
				<div className="">
					<QuantityButton
						quantity={updatedQuantity}
						setQuantity={setUpdatedQuantity}
						product={product}
						key={product.id}
						showUnit={true}
					/>
				</div>

				<Typography
					placeholder={product.name}
					variant="small"
					className="text-end text-2xl font-bold lg:col-span-2 px-5 py-1 mt-5 -mb-2 lg:mb-0 lg:mt-0"
				>
					${product.price * quantity}
				</Typography>
			</div>
		</div>
	);
};

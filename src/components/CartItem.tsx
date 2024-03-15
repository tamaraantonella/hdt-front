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
			className="grid grid-cols-10 grid-rows-3 justify-around w-full text-md text-gray-800 border border-b-0 border-gray-300 py-2 lg:max-w-3xl"
		>
			<img src={img} className="col-span-2 row-span-3 p-4 lg:h-20" />
			<Typography placeholder={product.name} className="capitalize col-span-8 ">
				{product.name}
			</Typography>
			<Button
				placeholder={product.name}
				variant="text"
				className="capitalize col-span-8 text-blue-500 font-semibold inline-block m-0 p-0 w-fit active:bg-white hover:bg-white hover:text-main"
				onClick={() => removeProduct(product)}
			>
				Eliminar
			</Button>
			<Typography
				placeholder={product.name}
				variant="small"
				className="col-span-4 "
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
				className="col-span-4 lg:col-span-2 text-end px-5"
			>
				${product.price * quantity}
			</Typography>
		</div>
	);
};

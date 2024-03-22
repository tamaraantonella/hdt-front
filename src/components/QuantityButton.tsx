import { useCart } from "@/hooks/useCart";
import { CollectionProducts } from "@/utils/types";
import { Button, Typography } from "@material-tailwind/react";
import { useMemo } from "react";

interface QuantityButtonProps {
	quantity: number;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
	product: CollectionProducts;
	setIsAddToCartPressed?: React.Dispatch<React.SetStateAction<boolean>>;
	showUnit?: boolean;
}

export const QuantityButton: React.FC<QuantityButtonProps> = ({
	quantity,
	setQuantity,
	product,
	setIsAddToCartPressed,
	showUnit = false,
}) => {
	const { updateCartItemQuantity, removeProduct } = useCart();

	const handleIncreaseQuantity = () => {
		setQuantity((prev) => {
			const newQuantity = prev + 1;
			updateCartItemQuantity(product, newQuantity);
			return newQuantity;
		});
	};

	const handleDecreaseQuantity = () => {
		if (quantity === 1) {
			if (setIsAddToCartPressed) setIsAddToCartPressed(false);
			removeProduct(product);
			return;
		}
		setQuantity((prev) => {
			const newQuantity = prev - 1;
			updateCartItemQuantity(product, newQuantity);
			return newQuantity;
		});
	};
	const saleUnits = useMemo(() => {
		if (product.saleUnit === "kg") {
			return "kg";
		}
		if (product.saleUnit === "g") {
			return "g";
		}
		return "unid.";
	}, [product.saleUnit]);
	return (
		<div className="flex items-center gap-2">
			<Button
				placeholder="+ button"
				className="bg-white text-main font-bold h-fit w-fit px-2 py-1 text-lg"
				ripple={false}
				variant="text"
				fullWidth={false}
				onClick={handleDecreaseQuantity}
			>
				-
			</Button>
			<Typography
				placeholder={product.name}
				variant="small"
				color="blue-gray"
				className=" text-lg"
			>
				{product.saleUnit === "g" ? quantity * 100 : quantity}{" "}
				{showUnit ? saleUnits : "en tu carrito"}
			</Typography>
			<Button
				placeholder="+ button"
				className="bg-white text-main font-bold h-fit w-fit px-2 py-1 text-lg"
				variant="text"
				ripple={false}
				fullWidth={false}
				onClick={handleIncreaseQuantity}
			>
				+
			</Button>
		</div>
	);
};

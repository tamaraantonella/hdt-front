import { CartItem } from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";
import { Button } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export const Cart = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	});
	const { cart, orderSummary } = useCart();
	return (
		<div className="flex w-full lg:min-h-screen flex-col relative mt-5">
			<div className="w-full" data-aos="fade-up">
				{cart.length === 0 ? (
					<div className="flex flex-col gap-20 my-32">
						<Typography variant="body1" className="text-center ">
							No hay ningún producto seleccionado.
						</Typography>
						<img
							className=" h-40"
							src="https://res.cloudinary.com/don3phnka/image/upload/v1710940210/productos/tomato_om8ydq.jpg"
							alt="potato"
						/>
					</div>
				) : (
					cart?.map((item) => (
						<CartItem
							key={item.product.id}
							product={item.product}
							quantity={item.quantity}
						/>
					))
				)}
			</div>
			{cart.length > 0 && (
				<div
					data-aos="fade-up"
					className="sticky bottom-0 mt-5 top-auto z-99 flex flex-col gap-2 h-fit bg-white border border-gray-600 lg:bg-white rounded-sm w-full mb-9 p-5 lg:items-end"
				>
					<div className="flex gap-3 items-center lg:justify-end lg:items-end lg:w-full">
						<Typography
							variant="subtitle2"
							color="blue-gray"
							sx={{
								lineHeight: "1.5",
								fontSize: "1.75rem",
								color: "rgb(53 94 27)",
							}}
						>
							Total:
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{
								lineHeight: "1.5",
								fontSize: "1.75rem",
								color: "rgb(53 94 27)",
							}}
						>
							${orderSummary}
						</Typography>
					</div>
					<Typography
						variant="overline"
						color="blue-gray"
						sx={{ lineHeight: "1.5", fontSize: "0.75rem" }}
						className=" text-center"
					>
						Por favor, completá todos los datos a continuación para poder
						realizar tu pedido.
					</Typography>

					<Button
						placeholder="Comprar"
						className="px-4 py-3 min-w-44 h-fit bg-main"
					>
						<Link to="/checkout" className="text-white lg:self-end">
							Realizar pedido
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

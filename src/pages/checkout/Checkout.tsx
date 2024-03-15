import { Spinner } from "@/components/Spinner";
import useApiRequest from "@/hooks/useApiRequest";
import { useCart } from "@/hooks/useCart";
import { CreateOrder, Order } from "@/utils/types";
import { Button, Input } from "@material-tailwind/react";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { generateOrderSummaryMessage, parseCartToCheckout } from "./utils";

type Inputs = {
	name: string;
	phone: string;
};

export const Checkout: React.FC = () => {
	const { cart, clearCart, orderSummary } = useCart();
	const { request } = useApiRequest();
	const [order, setOrder] = useState<Order | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const toPost = parseCartToCheckout(
			data.name,
			data.phone,
			orderSummary,
			cart,
		);
		mutate(toPost);
	};

	const { mutate, isLoading } = useMutation<Order, Error, CreateOrder>({
		mutationKey: "createOrder",
		mutationFn: async (createOrderData) =>
			request<Order>({
				url: `/orders`,
				method: "POST",
				data: createOrderData,
			}),
		onSuccess: (order) => {
			setOrder(order);
			generateOrderSummaryMessage(cart, order.id, order.user_name, order.total);
			clearCart();
		},
	});

	useEffect(() => {
		if (!cart.length && !order) {
			window.location.href = "/";
		}
	}, [cart.length]);
	return (
		<Box>
			{isLoading && <Spinner />}
			{!isLoading && !order && (
				<>
					<Typography variant="h4" className="text-main">
						Por favor completá los datos
					</Typography>
					<Typography variant="body1" className="text-main">
						Te pedimos que completes estos datos para terminar de cargar tu
						pedido, al confirmar el pedido serás redirigido a WhatsApp para
						finalizar la reserva.
					</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
					>
						{" "}
						<div className="mb-1 flex flex-col gap-6">
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Nombre y Apellido
							</Typography>
							<Input
								crossOrigin={undefined}
								{...register("name", { required: true, maxLength: 40 })}
								size="lg"
								placeholder="Tu nombre"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							{errors.name && (
								<span className="text-red-700 text-sm">
									Por favor complete su nombre
								</span>
							)}
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Celular
							</Typography>
							<Input
								crossOrigin={undefined}
								{...register("phone", { required: true })}
								size="lg"
								type="number"
								placeholder="3484558866"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							{errors.phone && (
								<span className="text-red-700 text-sm">
									Por favor complete su teléfono
								</span>
							)}
						</div>
						<Button
							placeholder="button"
							className="mt-6"
							fullWidth
							type="submit"
						>
							Confirmar pedido
						</Button>
					</form>
				</>
			)}
			{order && (
				<Box>
					<Typography variant="h6" className="mt-8">
						Tu pedido ha sido confirmado
					</Typography>
					<Typography variant="body1" className="mt-2">
						Tu número de pedido es: {order.id}
					</Typography>
					<Typography variant="body1" className="mt-2">
						Te hemos redirigido a WhatsApp para finalizar la reserva
					</Typography>
				</Box>
			)}
		</Box>
	);
};

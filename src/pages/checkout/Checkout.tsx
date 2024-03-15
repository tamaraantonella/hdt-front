import useApiRequest from "@/hooks/useApiRequest";
import { useCart } from "@/hooks/useCart";
import { Order } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const { request } = useApiRequest();
  const [order, setOrder] = useState();
  let message = "";

  const { isLoading, data } = useQuery<Order, Error>({
    queryKey: ["order"],
    queryFn: async () =>
      request<Order>({
        url: `/orders`,
        method: "POST",
        data: cart
      }),
    staleTime: 1000 * 60 * 5,
  });

  const generateOrderSummaryMessage = () => {
    cart?.map((item) => {
      return (message =
        message +
        item.quantity +
        " " +
        item.product.saleUnit +
        " " +
        item.product.name +
        "%0A");
    });
    const url =
      `https://api.whatsapp.com/send?phone=5491170071205&text=Hola te escribo desde la página web, queria hacer el siguiente pedido: %0A` +
      message;
    window.open(url);
  };
  return (
    <Box>
      <Typography variant="h3" className="text-main">
        Ya casi
      </Typography>
      <Typography variant="h5" className="text-main">
        Te pedimos que completes estos datos para terminar de cargar tu pedido
      </Typography>
    </Box>
  );
};

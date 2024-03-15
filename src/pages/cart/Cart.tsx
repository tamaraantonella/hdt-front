import { CartItem } from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";
import { Button } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, orderSummary } = useCart();
  return (
    <div className="flex w-full lg:min-h-screen flex-col relative mt-5">
      <div className="w-full">
        {cart?.map((item) => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="sticky bottom-0 mt-5 top-auto z-99 flex flex-col lg:flex-row lg:items-center lg:justify-end gap-2 h-fit bg-white border border-gray-600 lg:bg-gray-500/20 rounded-lg w-full mb-9 p-5">
        <div className="flex gap-3 items-center">
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
        >
          Por favor, completá todos los datos a continuación para poder realizar
          tu pedido.
        </Typography>

        <Button
          placeholder="Comprar"
          className="px-4 py-3 min-w-44 h-fit bg-main"
        >
          <Link to="/checkout" className="text-white">
            Realizar pedido
          </Link>
        </Button>
      </div>
    </div>
  );
};

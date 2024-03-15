import { useCart } from "@/hooks/useCart";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { Button } from "@material-tailwind/react";

export const CartWidget = () => {
  const { cartLength } = useCart();

  return (
    <Button
      placeholder="button"
      className="bg-white text-gray-900 px-2 py-2 relative"
      variant="text"
    >
      <a href="/cart">
        <ShoppingCartIcon className=" h-6 w-6 text-slate-500" />
        <p className="absolute top-0 right-0 bg-green-600 text-white px-1 rounded-full">
          {cartLength > 9 ? "9+" : cartLength}
        </p>
      </a>
    </Button>
  );
};

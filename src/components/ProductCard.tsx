import { useCart } from "@/hooks/useCart";
import { CollectionProducts } from "@/utils/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useMemo, useState } from "react";
import { QuantityButton } from "./QuantityButton";

interface ProductCardProps {
  product: CollectionProducts;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { updateCartItemQuantity, cart, addProduct } = useCart();
  const itemInCart = cart.find((item) => item.product.id === product.id);
  const [quantity, setQuantity] = useState(0);
  const [isAddToCartPressed, setIsAddToCartPressed] = useState(false);

  const handleAddToCart = () => {
    setIsAddToCartPressed(true);
    addProduct(product);
    setQuantity(1);
  };

  const img = product.imageUrl
    ? product.imageUrl
    : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1662125764/delTomate/deltomate-logo_pxslmj.png";

  const saleUnits = useMemo(() => {
    if (product.saleUnit === "kg") {
      return "x kg";
    }
    if (product.saleUnit === "g") {
      return "x 100g";
    }
    return "x 1";
  }, [product.saleUnit]);

  useEffect(() => {
    if (itemInCart) {
      setQuantity(itemInCart.quantity);
      setIsAddToCartPressed(true);
    }
    updateCartItemQuantity(product, quantity);
  }, []);

  return (
    <Card
      key={product.id}
      placeholder={product.name}
      className="md:w-64 lg:w-80 w-full relative"
    >
      {!product.stock && (
        <div className="w-full h-full absolute bg-black/80">
          <p className="bg-black/50 h-full absolute flex items-center justify-center text-white w-full top-0 text-3xl lg:text-5xl font-bold text-center uppercase z-50">
            SIN STOCK
          </p>
        </div>
      )}
      <CardHeader
        placeholder="product header"
        shadow={false}
        floated={false}
        className="w-auto md:h-52 h-44"
      >
        <img
          src={img}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </CardHeader>
      <CardBody placeholder="product body" className="px-5 w-full min-h-36">
        <div className="mb-2 flex flex-col gap-2 justify-start items-start w-full">
          <div className="w-full flex gap-2 items-center">
            <Typography
              color="blue-gray"
              className="font-medium capitalize truncate h-8 md:h-12"
            >
              {product.name}
            </Typography>
            <Typography className="font-bold text-sm">
              {saleUnits !== "x 1" && saleUnits}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 truncate"
          >
            {product?.description}
          </Typography>
          <Typography color="blue-gray" className=" font-bold md:self-end">
            $ {Number(product.price)}
          </Typography>
        </div>
      </CardBody>
      <CardFooter placeholder="product footer" className="pt-0 flex gap-2 h-24">
        {isAddToCartPressed ? (
          <QuantityButton
            key={product.id}
            quantity={quantity}
            setQuantity={setQuantity}
            product={product}
            setIsAddToCartPressed={setIsAddToCartPressed}
          />
        ) : (
          <Button
            placeholder="product button"
            ripple={false}
            fullWidth={true}
            className="bg-green-900/10 text-green-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs md:text-base"
            onClick={handleAddToCart}
            disabled={!product.stock}
          >
            Agregar al carrito
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

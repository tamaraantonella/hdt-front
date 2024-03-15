import { CartAtom } from "@/utils/atoms";
import { CreateOrder } from "@/utils/types";

export const parseCartToCheckout = (
  user_name: string,
  user_phone: string,
  total: number,
  cart: CartAtom[]
): CreateOrder => {
  return {
    user_name,
    user_phone,
    total,
    order_items: cart.map((item) => {
      return {
        product_id: item.product.id,
        quantity: item.quantity,
        total_price: item.product.price * item.quantity,
      };
    }),
  };
};

export const generateOrderSummaryMessage = (
  cart: CartAtom[],
  orderId: number,
  user_name: string,
  total: number
) => {
  const baseWhatsAppURL = "https://api.whatsapp.com/send?";
  const phoneNumber = "5491170071205";
  let message = `*ORDEN #${orderId}*
    `;
  cart?.forEach((item) => {
    const quantity =
      item.product.saleUnit === "g" ? item.quantity * 100 : item.quantity;
    const saleUnit =
      item.product.saleUnit === "unit" ? "unid." : item.product.saleUnit;
    message += `•*${quantity} ${saleUnit}* ${item.product.name} $${
      item.product.price * item.quantity
    }
      `;
  });

  const encodedMessage = encodeURIComponent(
    `Hola soy *${user_name}*, mi orden de pedido es ${message}
      *TOTAL: $${total}*`
  );
  const url = `${baseWhatsAppURL}phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(url, "_blank");
};

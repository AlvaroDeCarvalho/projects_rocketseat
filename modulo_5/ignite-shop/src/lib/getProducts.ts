import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export const getProducts = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const data = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: price ? (price.unit_amount! / 100): 'R$ 80,00',
    image: product.images[0] || "/placeholder.png",
    }
  });
  return data;
};

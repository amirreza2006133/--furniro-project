import { shopItems } from "./config";

export const state = {
  shopItems,
  cart: [
    {
      id: 1,
      name: "Grifo",
      sizes: "s",
      colors: "green",
      price: "500",
      priceUnit: "$",
    },
  ],
};

export function addItemToCart(newItem) {
  state.cart.push(newItem);
  return state;
}

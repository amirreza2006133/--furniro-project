import { shopItems } from "./config";

export const state = {
  shopItems,
  cart: [
    {
      id: 1,
      name: "Grifo",
      size: "s",
      color: "green",
      price: "500",
      priceUnit: "$",
      quantity: 2,
    },
  ],
};

export function addItemToTheCart(newItem) {
  newItem = {
    id: newItem.id,
    name: newItem.name,
    size: newItem.size,
    color: newItem.color,
    price: newItem.price,
    priceUnit: newItem.priceUnit,
    quantity: newItem.quantity,
  };
  state.cart.push(newItem);
  return state;
}

export function findItemInItemsList(id) {
  return shopItems.find((item) => item.id === Number(id));
}

import { products } from "./config";

export const state = {
  products,
  cart: [],
};

export function addProductToCart(product) {
  const newProduct = {
    id: product.id,
    name: product.name,
    size: product.size,
    color: product.color,
    price: product.price,
    currency: product.currency,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  };
  state.cart.push(newProduct);
  return state;
}

export function deleteProductFromCart(productId) {
  state.cart = state.cart.filter((product) => product.id !== Number(productId));
}

export function findProductById(id) {
  return products.find((product) => product.id === Number(id));
}

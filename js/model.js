import { products } from "./config";

export const state = {
  products,
  cart: [],
};

export function addProductToCart(product) {
  const existingCartProduct = findProductInCartById(product.id);
  if (
    existingCartProduct &&
    existingCartProduct.size === product.size &&
    existingCartProduct.color === product.color
  ) {
    increaseProductQuantity(product.id, product.quantity);
    return;
  }

  const newProduct = {
    id: product.id,
    name: product.name,
    size: product.size,
    color: product.color,
    price: product.price - (product.price * product.discount) / 100,
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

export function increaseProductQuantity(productId, increaseAmount = 1) {
  const existingCartProduct = findProductInCartById(productId);
  existingCartProduct.quantity += increaseAmount;
}

export function findProductInCartById(productId) {
  return state.cart.find((product) => product.id === Number(productId));
}

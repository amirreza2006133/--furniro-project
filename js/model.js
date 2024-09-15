import { products } from "./config";

if (module.hot) {
  module.hot.accept();
}

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
    imgUrl: product.imgUrl,
  };
  state.cart.push(newProduct);
  return state;
}

export function findProductById(id) {
  return products.find((product) => product.id === Number(id));
}

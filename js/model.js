import { fullProducts, products } from "./config";

export const state = {
  products,
  fullProducts,
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
  addProductToCartStorage(newProduct);
  return state;
}

export function deleteProductFromCart(productId) {
  state.cart = state.cart.filter((product) => product.id !== Number(productId));
  saveCartStorage(state.cart);
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

export function addProductToWishlist(product) {
  const wishlist = getWishlist();
  wishlist.push(product);
  saveWishlist(wishlist);
}

export function deleteProductFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter((product) => product.id !== productId);
  saveWishlist(wishlist);
  deleteProductFromCartStorage(productId);
}

export function getWishlist() {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

export function addProductToCartStorage(product) {
  const cart = getCartStorage();
  cart.push(product);
  saveCartStorage(cart);
}

export function deleteProductFromCartStorage(productId) {
  let cart = getCart();
  cart = cart.filter((product) => product.id !== productId);
  saveCartStorage(cart);
}

export function getCartStorage() {
  const cart = localStorage.getItem("cart");
  if (cart) {
    state.cart = JSON.parse(cart);
    return state.cart;
  } else {
    return [];
  }
}

function saveCartStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

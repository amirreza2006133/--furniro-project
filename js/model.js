import {
  COUNT_PAGINATION_ITEMS,
  fullProducts,
  products,
  TabbarTabs,
} from "./config";
import { calculateNumDiscount } from "./helper";

export const state = {
  products,
  fullProducts,
  cart: [],
  wishlist: [],
  tabbar: TabbarTabs,
  currentIndex: 0,
  sortedProducts: fullProducts,
  countPaginationItems: COUNT_PAGINATION_ITEMS,
  productsViewMode: "box",
};

export function findProductById(id) {
  return state.fullProducts.find((product) => product.id === Number(id));
}

export function findProductInCartById(productId) {
  return state.cart.find((product) => product.id === productId);
}

export function addProductToCart(product) {
  const productId = `${product.id}${product.size}${product.color}`;
  const existingCartProduct = findProductInCartById(productId);
  if (existingCartProduct) return increaseProductQuantity(productId, product.quantity);
  const calculatedDiscount = calculateNumDiscount(product)
  const newProduct = {
    id: productId,
    name: product.name,
    size: product.size,
    color: product.color,
    price: calculatedDiscount,
    currency: product.currency,
    totalPrice: calculatedDiscount * product.quantity,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  };
  state.cart.push(newProduct);
  saveCartStorage();
}

export function deleteProductFromCart(productId) {
  state.cart = state.cart.filter((product) => product.id !== productId);
  saveCartStorage();
}

export function increaseProductQuantity(productId, increaseAmount = 1) {
  const existingCartProduct = findProductInCartById(productId);
  existingCartProduct.quantity += increaseAmount;
  existingCartProduct.totalPrice = existingCartProduct.price * existingCartProduct.quantity;
  saveCartStorage();
}

export function decreaseProductQuantity(productId, decreaseAmount = 1) {
  const existingCartProduct = findProductInCartById(productId);
  existingCartProduct.quantity -= decreaseAmount;
  existingCartProduct.totalPrice = existingCartProduct.price * existingCartProduct.quantity;
  saveCartStorage();
}

export function changePeoductQuantity(productId, amount) {
  const existingCartProduct = findProductInCartById(productId);
  existingCartProduct.quantity = Number(amount);
  existingCartProduct.totalPrice = existingCartProduct.price * existingCartProduct.quantity;
  saveCartStorage();
}

export function getCartStorage() {
  const cart = localStorage.getItem("cart");
  state.cart = cart ? JSON.parse(cart) : [];
  return state.cart;
}

function saveCartStorage() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}

export function addProductToWishlist(product) {
  state.wishlist.push(product);
  saveWishlist();
}

export function deleteProductFromWishlist(productId) {
  state.wishlist = state.wishlist.filter(
    (product) => product.id !== Number(productId)
  );
  saveWishlist();
}

export function getWishlist() {
  const wishlist = localStorage.getItem("wishlist");
  state.wishlist = wishlist ? JSON.parse(wishlist) : [];
  return state.wishlist;
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
}

export function requestPaginationItems(array, index) {
  const startIndex = index * state.countPaginationItems;
  const endIndex = startIndex + state.countPaginationItems;
  const paginationItems = array.slice(startIndex, endIndex);
  state.currentIndex = index;
  return paginationItems;
}

export function requestSortProducts(sortBy) {
  if (sortBy === "new")
    state.sortedProducts = state.fullProducts.filter((product) => product.new);
  if (sortBy === "off")
    state.sortedProducts = state.fullProducts.filter((product) => product.discount);
  if (sortBy === "default") 
    state.sortedProducts = state.fullProducts;
  return state.sortedProducts;
}

export function goToDetailsPage(productId) {
  window.location.assign(`product.html?id=${productId}`);
}

export function getProductsQueryResults(query) {
  if (!query) return "Start searching ...";
  
  const results = [...state.fullProducts].filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  if (!results.length) return `No products found for "${query}" :(`;
  return results
}
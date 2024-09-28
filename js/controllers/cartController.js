import {
  deleteProductFromCart,
  findProductById,
  getCartStorage,
  state,
} from "../model";
import CartView from "../views/cartView";

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  CartView.reRender(state.cart);
}

function init() {
  const cart = getCartStorage();
  CartView.render(cart, findProductById, deleteProductFromCartHandler);
}

init();

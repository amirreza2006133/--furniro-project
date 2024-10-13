import { deleteProductFromCart, findProductById, getCartStorage, state } from "../model";
import CartView from "../views/cartView";
import CartPreviewView from "../views/cartPreviewView";
import NotificationView from "../views/notificationView";

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  CartView.reRender(state.cart);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function init() {
  const cart = getCartStorage();
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
  CartView.render(cart, findProductById, deleteProductFromCartHandler);
}

init();

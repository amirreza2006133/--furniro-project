import { deleteProductFromCart, findProductInCartById, getCartStorage, state } from "../model";
import CartView from "../views/cartView";
import CartPreviewView from "../views/cartPreviewView";
import NotificationView from "../views/notificationView";
import HambergurMenuView from "../views/HambergurMenuView";

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlHambergurMenu() {
  HambergurMenuView.render();
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
  CartView.render(cart, findProductInCartById, deleteProductFromCartHandler);
  HambergurMenuView.addEventHandler(controlHambergurMenu)
}

init();

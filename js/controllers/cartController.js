import { changePeoductQuantity, deleteProductFromCart, findProductInCartById, getCartStorage, state } from "../model";
import CartView from "../views/cartView";
import CartPreviewView from "../views/cartPreviewView";
import NotificationView from "../views/notificationView";
import HambergurMenuView from "../views/HambergurMenuView";

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlCart() {
  CartView.render(getCartStorage())
}

function controlHambergurMenu() {
  HambergurMenuView.render();
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCart();
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler);
  CartView.addEventHandler(controlCart, deleteProductFromCartHandler, changePeoductQuantity)
  HambergurMenuView.addEventHandler(controlHambergurMenu)
}

init();

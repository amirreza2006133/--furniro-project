import { deleteProductFromCart, getCartStorage } from "./model";
import CartPreviewView from "./views/cartPreviewView";
import NotificationView from "./views/notificationView";

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
}

init();
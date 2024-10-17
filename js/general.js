import { deleteProductFromCart, getCartStorage } from "./model";
import CartPreviewView from "./views/cartPreviewView";
import NotificationView from "./views/notificationView";
import HambergurMenuView from "./views/HambergurMenuView";
function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlHambergurMenu() {
  HambergurMenuView.render();
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function init() {  
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
  HambergurMenuView.addEventHandler(controlHambergurMenu)
}

init();
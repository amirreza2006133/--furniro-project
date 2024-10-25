import { deleteProductFromCart, getCartStorage } from "../model";
import CartPreviewView from "../views/cartPreviewView";
import LoginView from "../views/loginView";
import NotificationView from "../views/notificationView";
import HambergurMenuView from "../views/HambergurMenuView";
import FooterView from "../views/footerView";

function controlFooter() {
  FooterView.render();
}
 
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
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler);
  LoginView.addEventHandler();  
  HambergurMenuView.addEventHandler(controlHambergurMenu);
  FooterView.addEventHandler(controlFooter);
}

init();

import { addProductToCart, deleteProductFromCart, findProductById, getCartStorage, state } from "../model";
import NotificationView from "../views/notificationView";
import ProductView from "../views/productView";
import TabbarView from "../views/tabbarView";
import CartPreviewView from "../views/cartPreviewView";
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

function controlProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return window.location.assign("home.html");

  const product = findProductById(id);
  ProductView.render(product);
}

function controlTabbar() {
  TabbarView.render(state.tabbar);
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  controlCartPreview();
  NotificationView.success("product added successfully");
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
  ProductView.addEventHandler(controlProduct, addProductToCartHandler);
  TabbarView.addEventHandler(controlTabbar);  
  HambergurMenuView.addEventHandler(controlHambergurMenu);
  FooterView.addEventHandler(controlFooter);
}

init();

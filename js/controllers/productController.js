import { addProductToCart, deleteProductFromCart, findProductById, getCartStorage, state } from "../model";
import NotificationView from "../views/notificationView";
import ProductView from "../views/productView";
import TabbarView from "../views/tabbarView";
import CartPreviewView from "../views/cartPreviewView";

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return window.location.assign("home.html");

  const product = findProductById(id);
  ProductView.reRender(product);
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
  NotificationView.success("product added successfully");
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
  ProductView.render(controlProduct, addProductToCartHandler);
  TabbarView.addEventHandler(controlTabbar);
}

init();

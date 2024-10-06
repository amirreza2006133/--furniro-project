import { addProductToCart, findProductById, state } from "../model";
import NotificationView from "../views/notificationView";
import ProductView from "../views/productView";
import TabbarView from "../views/tabbarView";

function controlProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return window.location.assign("home.html");

  const product = findProductById(id);
  ProductView.reRender(product);
}

function controlTabbar() {
  TabbarView.render(state.tabbar);
}

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  NotificationView.success("product added successfully");
}

function init() {
  ProductView.render(controlProduct, addProductToCartHandler);
  TabbarView.addEventHandler(controlTabbar);
}

init();

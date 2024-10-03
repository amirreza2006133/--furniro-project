import { addProductToCart, findProductById } from "../model";
import NotificationView from "../views/notificationView";
import ProductView from "../views/productView";

function controlProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return window.location.assign("home.html");

  const product = findProductById(id);
  ProductView.reRender(product);
}

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  NotificationView.success("product added successfully");
}

function init() {
  ProductView.render(controlProduct, addProductToCartHandler);
}

init();

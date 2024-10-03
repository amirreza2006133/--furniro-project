import { findProductById } from "../model";
import ProductView from "../views/productView";

function controlProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return window.location.assign("home.html");

  const product = findProductById(id);
  ProductView.reRender(product);
}

function init() {
  ProductView.render(controlProduct);
}

init();

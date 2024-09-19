import {
  state,
  findProductById,
  addProductToCart,
  deleteProductFromCart,
} from "../model";
import CartPreviewView from "../views/cartPreviewView";
import FooterView from "../views/footerView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  CartPreviewView.reRender(state.cart);
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  CartPreviewView.reRender(state.cart);
}

function init() {
  CartPreviewView.render(state.cart, deleteProductFromCartHandler);
  ProductModalView.render(addProductToCartHandler);
  ProductListView.render(state.products, findProductById, ProductModalView);
  FooterView.render();
}

init();

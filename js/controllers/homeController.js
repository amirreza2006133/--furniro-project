import { state, findProductById, addProductToCart } from "../model";
import CartPreviewView from "../views/cartPreviewView";
import FooterView from "../views/footerView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  CartPreviewView.render(state.cart);
}

function init() {
  CartPreviewView.render(state.cart);
  ProductModalView.render(addProductToCartHandler);
  ProductListView.render(state.products, findProductById, ProductModalView);
  FooterView.render()
}

init();

const Html = document.querySelector(".overflow");
const CartOPenEL = document.querySelector(".main-btn-cart");
const CloseEL = document.querySelector(".close-icon");

CartOPenEL.addEventListener("click", function () {
  CartOPenEL.classList.toggle("cart-open");
  //   Html.style.overflow = "hidden";
});
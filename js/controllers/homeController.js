import { state, findProductById, addProductToCart } from "../model";
import CartPreviewView from "../views/cartPreviewView";
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
}

init();

const Html = document.querySelector(".overflow");
const CartOPenEL = document.querySelector(".main-btn-cart");
const CloseEL = document.querySelector(".close-icon");

CartOPenEL.addEventListener("click", function () {
  CartOPenEL.classList.toggle("cart-open");
  //   Html.style.overflow = "hidden";
});

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

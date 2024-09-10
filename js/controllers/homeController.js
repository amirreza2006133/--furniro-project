import { state, findItemInItemsList } from "../model";
import CartPreviewView from "../views/cartPreviewView";
import ProductListView from "../views/productListView";
function init() {
  CartPreviewView.render(state.cart);
  ProductListView.render(state.shopItems, findItemInItemsList);
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

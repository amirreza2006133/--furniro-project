import { state } from "../model";
import CartPreviewView from "../views/cartPreviewView";
function init() {
  CartPreviewView.render(state.cart);
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

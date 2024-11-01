import { calculateTotalPrice, formatCurrency } from "../helper";
import trashIcon from "../../img/icons/trashcan.svg";

class CartView {
  _parentEl = document.querySelector(".wrapper");
  _totalPriceEl = document.querySelector(".aside-cart-price.gold");
  _messageEl = document.querySelector(".cart-message");
  _changePeoductQuantityHandler;

  render(cart) {
    this._parentEl.innerHTML = "";
    this._totalPriceEl.textContent = calculateTotalPrice(cart)
    if (!cart.length) this._showMessage("There is no product in cart");
    const generatedMarkup = this._generateMarkup(cart);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
    this._setupChangePeoductQuantityHandler();
  }

  addEventHandler(render, deleteProductFromCartHandler, changePeoductQuantity) {
    this._changePeoductQuantityHandler = changePeoductQuantity;
    window.addEventListener("load", render)
    this._parentEl.addEventListener("click", (e) => {
      const productId = e.target.closest(".second-row").dataset.id;
      if (e.target.classList.contains("trash-can")) deleteProductFromCartHandler(productId);
    });
  }

  _setupChangePeoductQuantityHandler() {
    this._parentEl.querySelectorAll(".quantity-input")
      .forEach(el => {
        let previousValue = el.value; // Store the initial value
        el.addEventListener("focus", e => previousValue = e.target.value); // Update previousValue on focus
        el.addEventListener("blur", e => {
          if (e.target.classList.contains("quantity-input")) {
            const productId = e.target.closest(".second-row").dataset.id;
            const newValue = e.target.value;
            if (newValue === previousValue) return;
            else this._changePeoductQuantityHandler(productId, newValue);
          }
        });
      });
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (product) => `
          <div class="second-row" data-id="${product.id}">
            <div class="cart-img-box">
              <img class="cart-img" src="${product.imageUrl}" alt="${product.name}" />
            </div>
            <p class="table-cart-details">${product.name}</p>
            <p class="table-cart-details">${formatCurrency(product.price)}</p>
            <div class="num-border">
              <input type="text" class="table-cart-details border dark quantity-input" value="${product.quantity}" />
            </div>
            <p class="table-cart-details dark">${formatCurrency(product.totalPrice)}</p>
            <img class="trash-can" src="${trashIcon}" alt="delete"/>
          </div>
    `
      )
      .join("");
  }

  _showMessage(message) {
    this._messageEl.textContent = message;
  }
}

export default new CartView();

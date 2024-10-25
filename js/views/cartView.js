import { formatCurrency } from "../helper";
import trashIcon from "../../img/icons/trashcan.svg";

class CartView {
  _parentEl = document.querySelector(".wrapper");
  _totalPriceEl = document.querySelector(".aside-cart-price.gold");
  _messageEl = document.querySelector(".cart-message");

  render(cart) {
    this._parentEl.innerHTML = "";
    this._calculateTotalPrice(cart);
    if (!cart.length) this._showMessage("There is no product in cart");
    const generatedMarkup = this._generateMarkup(cart);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
  }

  addEventHandler(render, deleteProductFromCartHandler, changePeoductQuantity) {
    window.addEventListener("load", render)
    this._parentEl.addEventListener("click", (e) => {
      const productId = e.target.closest(".second-row").dataset.id;
      if (e.target.classList.contains("trash-can")) deleteProductFromCartHandler(productId);
    });
    this._parentEl.addEventListener("keyup", e => {
      if (e.target.classList.contains("quantity-input")) {
        const productId = e.target.closest(".second-row").dataset.id;
        changePeoductQuantity(productId, e.target.value)
      }
    })
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

  _calculateTotalPrice(cart) {
    const totalPrice = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);
    this._totalPriceEl.textContent = `${formatCurrency(totalPrice)}`;
  }

  _showMessage(message) {
    this._messageEl.textContent = message;
  }
}

export default new CartView();

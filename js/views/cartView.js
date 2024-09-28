import { formatCurrency } from "../helper";
import trashIcon from "../../img/icons/trashcan.svg";

class CartView {
  _parentEl = document.querySelector(".cart-table");
  _totalPriceEl = document.querySelector(".aside-cart-price.gold");
  _messageEl = document.querySelector(".cart-message");
  _findProductById;
  _deleteProductFromCart;

  render(cart, findProductById, deleteProductFromCart) {
    this._findProductById = findProductById;
    this._deleteProductFromCart = deleteProductFromCart;
    this._calculateTotalPrice(cart);
    this._setupEventListeners();
    if (!cart.length) this._showMessage("there is no product in cart");
    const generatedMarkup = this._generateMarkup(cart);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
  }

  reRender(cart) {
    if (!cart.length) this._showMessage("there is no product in cart");

    const cartItems = document.querySelectorAll(".second-row");
    cartItems.forEach((el) => el.remove());
    const generatedMarkup = this._generateMarkup(cart);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
    this._calculateTotalPrice(cart);
  }

  _setupEventListeners() {
    this._parentEl.addEventListener("click", (e) => {
      const productId = e.target.closest(".second-row").dataset.id;
      if (e.target.classList.contains("trash-can"))
        this._deleteProductFromCart(productId);
    });
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (product) => `
        <div class="second-row" data-id="${product.id}">
              <div class="cart-img-box">
                <img
                  class="cart-img"
                  src="${product.imageUrl}"
                  alt="${product.name}"
                />
              </div>

              <p class="table-cart-details">${product.name}</p>
              <p class="table-cart-details">${formatCurrency(
                this._findProductById(product.id).price
              )}</p>
              <div class="num-border">
                <p class="table-cart-details border dark">${
                  product.quantity
                }</p>
              </div>
              <p class="table-cart-details dark">${formatCurrency(
                product.price
              )}</p>
              <img
                class="trash-can"
                src="${trashIcon}"
                alt="delete"
              />
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

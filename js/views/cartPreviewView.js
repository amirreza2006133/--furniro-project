import { CURRENCY_UNIT } from "../config";

class CartPreviewView {
  _parentEl = document.querySelector(".main-btn-cart");
  _productsListEl = document.querySelector(".cart-items-list");
  _openPreviewEl = document.querySelector(".open-cart-preview");
  _closePreviewEl = document.querySelector(".close-icon");
  _totalPriceEl = document.querySelector(".cart-price");
  _deleteProductFromCart;

  render(cart, deleteProductHandler) {
    const markup = this._generateMarkup(cart);
    this._elContentCleaner(this._productsListEl);
    this._productsListEl.insertAdjacentHTML("afterbegin", markup);
    this._setupEventListeners();
    this._deleteProductFromCart = deleteProductHandler;
  }

  reRender(cart) {
    const markup = this._generateMarkup(cart);
    this._elContentCleaner(this._productsListEl);
    this._productsListEl.insertAdjacentHTML("afterbegin", markup);
    this._changeTotalPrice(cart);
  }

  _changeTotalPrice(cart) {
    const totalPrice = cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    this._totalPriceEl.textContent = `${totalPrice}${CURRENCY_UNIT}`;
  }

  _setupEventListeners() {
    this._openPreviewEl.addEventListener("click", this._openPreview.bind(this));
    this._closePreviewEl.addEventListener(
      "click",
      this._closePreview.bind(this)
    );
    this._parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("cart-delete-product")) {
        const targetProductId = e.target.closest(".cart-item").dataset.id;
        this._deleteProductFromCart(targetProductId);
      }
    });
  }

  _openPreview() {
    this._parentEl.classList.add("cart-open");
  }

  _closePreview() {
    this._parentEl.classList.remove("cart-open");
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (product) => `
          <li class="cart-item" data-id="${product.id}">
            <img src="${product.imageUrl}" alt="${product.name}" />
            <div>
                <p>
                  <span>${product.name}</span> <span class="txt-lt">( ${product.color} / ${product.size} )</span>
                </p>
                <p>
                  <span>${product.quantity} x</span><span class="cart-item-price">${product.currency}${product.price}</span>
                </p>
            </div>
            <button class="cart-delete-product">✖</button>
          </li>`
      )
      .join("");
  }

  _elContentCleaner(el) {
    el.innerHTML = "";
  }
}

export default new CartPreviewView();

import { calculateTotalPrice, formatCurrency } from "../helper";

class CartPreviewView {
  _parentEl = document.querySelector(".main-btn-cart");
  _cartEl = document.querySelector(".cart");
  _productsListEl = document.querySelector(".cart-items-list");
  _openPreviewEl = document.querySelector(".open-cart-preview");
  _closePreviewEl = document.querySelector(".close-icon");
  _totalPriceEl = document.querySelector(".cart-price");
  _messageEl = document.querySelector(".cart-preview-message");

  render(cart) {
    if (!cart.length) this._showMessage("There is no products in cart");
    else this._showMessage("")
    const generatedMarkup = this._generateMarkup(cart);
    this._elContentCleaner(this._productsListEl);
    this._productsListEl.insertAdjacentHTML("afterbegin", generatedMarkup);
    this._totalPriceEl.textContent = calculateTotalPrice(cart);
  }

  addEventHandler(render, deleteProductFromCartHandler) {
    window.addEventListener("load", render);
    this._openPreviewEl.addEventListener("click", this._openPreview.bind(this));
    this._closePreviewEl.addEventListener("click", this._closePreview.bind(this));
    this._cartEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("cart-delete-product")) {
        const targetProductId = e.target.closest(".cart-item").dataset.id;
        deleteProductFromCartHandler(targetProductId);
      }

      if (e.target.closest(".shade")) this._closePreview();
    });
  }

  _showMessage(message) {
    this._messageEl.textContent = message;
  }

  _openPreview() {
    this._cartEl.classList.add("cart-open");
  }

  _closePreview() {
    this._cartEl.classList.remove("cart-open");
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (product) => `
          <li class="cart-item" data-id="${product.id}">
            <img src="${product.imageUrl}" alt="${product.name}" />
            <div>
                <p>
                  <span>${product.name}</span> <span class="txt-lt">( ${
          product.color
        } / ${product.size} )</span>
                </p>
                <p>
                  <span>${
                    product.quantity
                  } x</span><span class="cart-item-price">${formatCurrency(
          product.price
        )}</span>
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

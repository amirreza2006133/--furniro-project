class CartPreviewView {
  _parentEl = document.querySelector(".main-btn-cart");
  _productsListEl = document.querySelector(".cart-items-list");
  _openPreviewEl = document.querySelector(".open-cart-preview");
  _closePreviewEl = document.querySelector(".close-icon");

  render(cart) {
    const markup = this._generateMarkup(cart);
    this._elContentCleaner(this._productsListEl);
    this._productsListEl.insertAdjacentHTML("afterbegin", markup);
    this._setupEventListeners();
  }

  _setupEventListeners() {
    this._openPreviewEl.addEventListener("click", this._openPreview.bind(this));
    this._closePreviewEl.addEventListener(
      "click",
      this._closePreview.bind(this)
    );
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
          <li class="cart-item">
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

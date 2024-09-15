class CartPreviewView {
  _parentElement = document.querySelector(".cart-items-list");

  render(cart) {
    const markup = this._generateMarkup(cart);
    this._elContentCleaner(this._parentElement);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
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

class CartPreviewView {
  _parentElement = document.querySelector(".cart-items-list");

  render(cart) {
    const markup = this._generateMarkup(cart);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (product) => `
          <li class="cart-item">
            <span>${product.name}</span>
            <span>Size: ${product.size}</span>
            <span>Color: ${product.color}</span>
            <span>${product.currency}${product.price}</span>
            <span>Quantity: ${product.quantity}</span>
          </li>`
      )
      .join("");
  }
}

export default new CartPreviewView();
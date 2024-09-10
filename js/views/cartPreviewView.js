class CartPreviewView {
  _parentEl = document.querySelector(".cart-items-list");

  render(cart) {
    const generatedMarkup = this._generateMarkup(cart);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }

  _generateMarkup(cart) {
    return cart
      .map(
        (item) => `
          <li class="cartItem">
              ${item.id}
              ${item.name}
              ${item.sizes}
              ${item.colors}
              ${item.price}
              ${item.priceUnit} 
          </li>
      `
      )
      .join("");
  }
}

export default new CartPreviewView();

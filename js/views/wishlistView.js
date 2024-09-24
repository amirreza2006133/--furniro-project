class WishlistView {
  _parentEl = document.querySelector(".wishlist");
  _messageEl = document.querySelector(".whishlist-message");

  render(wishlist) {
    if (!wishlist.length) {
      return this._showMessage("There is no products in your Wishlist");
    }

    const generatedMarkup = this._generateMarkup(wishlist);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }

  _generateMarkup(wishlist) {
    return wishlist
      .map((item) => {
        return `
        <li class="item">
            <img class="thumb" src="${item.imageUrl}" alt="${item.name}">
            <b class="title">${item.name}</b>
            <span class="price">${item.price}</span>
            <button class="delete-product-from-wishlist-btn">✖</button>
        </li>`;
      })
      .join("");
  }

  _showMessage(message) {
    this._messageEl.textContent = message;
  }
}

export default new WishlistView();

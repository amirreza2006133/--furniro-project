import { calculateDiscount, formatCurrency } from "../helper";

class WishlistView {
  _parentEl = document.querySelector(".wishlist");
  _messageEl = document.querySelector(".whishlist-message");

  render(wishlist) {
    this._parentEl.innerHTML = "";
    if (!wishlist.length) this._showMessage("There is no products in your Wishlist");
    const generatedMarkup = this._generateMarkup(wishlist);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }

  addEventHandler(render, deleteProductFromCartHandler) {
    window.addEventListener("load", render);
    this._parentEl.addEventListener("click", e => {
      const productId = e.target.closest(".item")?.dataset.id;
      if (e.target.classList.contains("delete-product-from-wishlist-btn")) deleteProductFromCartHandler(productId)
    })
  }

  _generateMarkup(wishlist) {
    return wishlist
      .map((item) => {
        return `
        <li class="item" data-id="${item.id}">
            <img class="thumb" src="${item.imageUrl}" alt="${item.name}">
            <b class="title">${item.name}</b>
            ${
              item.discount
                ? ` <span class="price-on inline-on"> ${
                    calculateDiscount(item)
                  } </span>`
                : `<span class="price-on inline-on">${formatCurrency(
                    item.price
                  )}</span>`
            }

            ${
              item.discount
                ? `<span class="price-off" inline-off>${formatCurrency(
                    item.price
                  )} </span>`
                : ""
            }
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

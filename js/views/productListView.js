import emptyHeartIcon from "../../img/icons/heart-empty.svg";
import filledHeartIcon from "../../img/icons/heart-filled.svg";
import shareIcon from "../../img/icons/share.svg";
import { formatCurrency } from "../helper";

class ProductListView {
  _parentElement = document.querySelector(".card-container");
  _findProductById;
  _wishlistClickHandler;
  modalView;

  render(products, findProductById, modalView, wishlistClickHandler) {
    this._findProductById = findProductById;
    this._wishlistClickHandler = wishlistClickHandler;
    const markup = this._generateMarkup(products);
    this._parentElement.innerHTML = markup;
    this.modalView = modalView;
    this._setupEventListeners();
  }

  renderWishlist(wishlist) {
    const productCardEls =
      this._parentElement.querySelectorAll(".product-card");
    productCardEls.forEach((card) => {
      const productId = Number(card.dataset.id);
      const isProductInWishList = wishlist.some((product) => product.id === productId);
      const wishlistIcon = card.querySelector(".wishlist-click-btn");
      if (isProductInWishList) wishlistIcon.src = filledHeartIcon;
      else wishlistIcon.src = emptyHeartIcon;
    });
  }

  _setupEventListeners() {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = Number(e.target.closest(".product-card").dataset.id);
      if (e.target.classList.contains("show-modal")) this._openProductModal(e);
      if (e.target.classList.contains("wishlist-click-btn"))
        this._wishlistClickHandler(productId);
    });
  }

  _generateMarkup(products) {
    return products
      .map(
        (product) => `
          <div class="product-card" data-id="${product.id}">
            <div class="off-${product.discount} ${product.new ? "new" : ""}">
              <div class="gradiant"></div>
              <a class="hover-btn show-modal" href="#"> Add to cart </a>
              <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#"><img src="${shareIcon}" alt="share" /><span>share</span></a>
                </div>
                <div class="hover-nav-item">
                  <a href="#"><img class="wishlist-click-btn" src="${
                    product.wishlist ? filledHeartIcon : emptyHeartIcon
                  }" alt="share" /> <span>wishlist</span> </a>
                </div>
              </nav>
  
              <img class="product-card-image" src="${product.imageUrl}" alt="${
          product.name
        }" />
              <div class="product-card-info">
                <h3 class="heading-tertiary">${product.name}</h3>
                <span class="tag">${product.description}</span>
                <p class="card-price">
                  ${
                    product.discount
                      ? ` <span class="price-on"> ${formatCurrency(this._calculateDiscountedPrice(product))} </span>`
                      : `<span class="price-on">${formatCurrency(product.price)}</span>`
                  }

                  ${
                    product.discount 
                    ? `<span class="price-off">${formatCurrency(product.price)} </span>`
                    : ""
                  }
                  
                </p>
              </div>
            </div>
          </div>`
      )
      .join("");
  }

  _calculateDiscountedPrice(product) {
    const calculatedPrice =
      product.price - (product.price * product.discount) / 100;
    if (calculatedPrice % 1 !== 0) calculatedPrice = calculatedPrice.toFixed(2);
    return calculatedPrice;
  }

  _openProductModal(e) {
    const productId = e.target.closest(".product-card").dataset.id;
    const currentProduct = this._findProductById(productId);

    // Pass the current product to the modal view
    this.modalView.openModal(currentProduct);
  }
}

export default new ProductListView();

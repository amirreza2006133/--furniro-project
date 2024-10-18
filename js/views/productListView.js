import emptyHeartIcon from "../../img/icons/heart-empty.svg";
import filledHeartIcon from "../../img/icons/heart-filled.svg";
import shareIcon from "../../img/icons/share.svg";
import compareIcon from "../../img/icons/compare-svgrepo-com 1.png";
import { formatCurrency } from "../helper";

class ProductListView {
  _parentElement = document.querySelector(".product-section");
  _boxParentElement = document.querySelector(".card-container");
  _inlineParentElement = document.querySelector(".card-inline-container");

  render(products, wishlist, viewMode = "box") {
    let generatedMarkup;
    this._boxParentElement.innerHTML = "";
    this._inlineParentElement.innerHTML = "";

    if (viewMode === "box") {
      generatedMarkup = this._generateBoxMarkup(products);
      this._boxParentElement.insertAdjacentHTML("beforeend", generatedMarkup);
    }

    if (viewMode === "inline") {
      generatedMarkup = this._generateInlineMarkup(products);
      this._inlineParentElement.insertAdjacentHTML(
        "beforeend",
        generatedMarkup
      );
    }

    this.renderWishlist(wishlist);
  }

  renderWishlist(wishlist) {
    // selecting the cards
    const productCardEls =
      this._parentElement.querySelectorAll(".pr-list-card");

    // resting icons
    const currentLikedIcons = document.querySelectorAll(
      ".wishlist-click-btn.liked"
    );
    currentLikedIcons.forEach((el) => {
      el.src = emptyHeartIcon;
      el.textContent = "like";
      el.classList.remove("liked");
    });

    productCardEls.forEach((card) => {
      const productId = Number(card.dataset.id);
      const isProductInWishList = wishlist.some(
        (product) => product.id === productId
      );
      if (!isProductInWishList) return;

      // if product is in user's wishlist, change it's icon and label
      const wishlistIcon = card.querySelector(".wishlist-click-btn");
      const wishlistLabel = wishlistIcon.nextElementSibling;

      if (isProductInWishList) {
        wishlistIcon.src = filledHeartIcon;
        wishlistIcon.classList.add("liked");
        wishlistLabel ? (wishlistLabel.textContent = "unlike") : "";
      }
    });
  }

  addEventHandler(
    renderProductList,
    renderWishlist,
    renderModal,
    wishlistClickHandler,
    goToDetailsPage
  ) {
    window.addEventListener("load", () => {
      renderProductList && renderProductList();
      renderWishlist && renderWishlist();
    });

    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();

      const productId = e.target.closest(".pr-list-card")?.dataset.id;
      if (e.target.classList.contains("show-modal")) renderModal(productId);
      if (e.target.classList.contains("gradiant")) goToDetailsPage(productId);
      if (e.target.classList.contains("wishlist-click-btn"))
        wishlistClickHandler(productId);
    });
  }

  _generateBoxMarkup(products) {
    return products
      .map(
        (product) => `
          <div class="pr-list-card product-card" data-id="${product.id}">
            <div class="${product.discount ? "off" : ""} ${
          product.new ? "new" : ""
        }">${product.discount || ""}</div>
            <div class="gradiant">
              <a class="hover-btn show-modal" href="#"> Add to cart </a>
              <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#"><img src="${shareIcon}" alt="share" /><span>share</span></a>
                </div>
                <div class="hover-nav-item">
                  <a href="#"><img src="${compareIcon}" alt="compare" /><span>compare</span></a>
                </div>
                <div class="hover-nav-item">
                  <a href="#"><img class="wishlist-click-btn" src="${emptyHeartIcon}" alt="share" /> <span>like</span> </a>
                </div>
              </nav>
            </div>
              
            <img class="product-card-image" src="${product.imageUrl}" alt="${
          product.name
        }" />
            <div class="product-card-info">
              <h3 class="heading-tertiary">${product.name}</h3>
              <span class="tag">${product.description}</span>
              <p class="card-price">
                ${
                  product.discount
                    ? ` <span class="price-on"> ${formatCurrency(
                        this._calculateDiscountedPrice(product)
                      )} </span>`
                    : `<span class="price-on">${formatCurrency(
                        product.price
                      )}</span>`
                }

                ${
                  product.discount
                    ? `<span class="price-off">${formatCurrency(
                        product.price
                      )} </span>`
                    : ""
                }
              </p>
            </div>
          </div>`
      )
      .join("");
  }

  _generateInlineMarkup(products) {
    return products
      .map(
        (product) => `
      <div class="pr-list-card product-inline-card" data-id="${product.id}">
        <div class="product-inline-info">
        <div class="product-inline-img-box">
          <div class="product-inline-tag ${product.new ? "inline-new" : ""}${
          product.discount ? "inline-off" : ""
        }">${product.discount || ""}${product.new ? "new" : ""}</div>
          <img class="product-inline-img" src="${
            product.imageUrl
          }" alt=" a photo of a stylish caffe chair"/>
        </div>
          <div class="product-description">
            <h3 class="product-inline-heading">${product.name}</h3>
            <span class="tag-inline">${product.description}</span>
            <div class="product-prices">
              ${
                product.discount
                  ? ` <span class="price-on inline-on"> ${formatCurrency(
                      this._calculateDiscountedPrice(product)
                    )} </span>`
                  : `<span class="price-on inline-on">${formatCurrency(
                      product.price
                    )}</span>`
              }

              ${
                product.discount
                  ? `<span class="price-off" inline-off>${formatCurrency(
                      product.price
                    )} </span>`
                  : ""
              }
            </div>
          </div>
        </div>

        <div class="product-info-cta">
              <a class="hover-btn btn-inline show-modal" href="#"> Add to cart </a>
              <div class="icons-inline-container">
                <a href="#"><img src="${shareIcon}" alt="share" /></a>
                <a href="#"><img src="${compareIcon}" alt="compare"/></a>
                <a href="#"><img class="wishlist-click-btn" src="${emptyHeartIcon}" alt="share"/></a>
              </div>
        </div>
      </div>
      `
      )
      .join("");
  }

  _calculateDiscountedPrice(product) {
    let calculatedPrice =
      product.price - (product.price * product.discount) / 100;
    if (calculatedPrice % 1 !== 0) calculatedPrice = calculatedPrice.toFixed(2);
    return calculatedPrice;
  }
}

export default new ProductListView();

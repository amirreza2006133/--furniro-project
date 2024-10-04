import emptyHeartIcon from "../../img/icons/heart-empty.svg";
import filledHeartIcon from "../../img/icons/heart-filled.svg";
import shareIcon from "../../img/icons/share.svg";
import compareIcon from "../../img/icons/compare-svgrepo-com 1.png";
import { formatCurrency } from "../helper";

class ProductListView {
  _parentElement = document.querySelector(".card-container");

  render(products) {
    const generatedMarkup = this._generateMarkup(products);
    this._parentElement.insertAdjacentHTML("beforeend", generatedMarkup);
  }

  renderWishlist(wishlist) {
    // selecting the cards
    const productCardEls =
      this._parentElement.querySelectorAll(".product-card");

    productCardEls.forEach((card) => {
      const productId = Number(card.dataset.id);
      const isProductInWishList = wishlist.some((product) => product.id === productId);
      if (!isProductInWishList) return;

      // if product is in user's wishlist, change it's icon and label
      const wishlistIcon = card.querySelector(".wishlist-click-btn");
      const wishlistLabel = wishlistIcon.nextElementSibling;

      if (isProductInWishList) {
        wishlistIcon.src = filledHeartIcon;
        wishlistLabel.textContent = "unlike";
      }
    });
  }

  addEventHandler(renderProductList, renderWishlist, renderModal, wishlistClickHandler, goToDetailsPage) {
    window.addEventListener("load", () => {
      renderProductList();
      renderWishlist();
    });

    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();

      const productId = e.target.closest(".product-card")?.dataset.id;
      if (e.target.classList.contains("show-modal")) renderModal(productId);
      if (e.target.classList.contains("gradiant")) goToDetailsPage(productId);
      if (e.target.classList.contains("wishlist-click-btn")) wishlistClickHandler(productId);
    });
  }

  _generateMarkup(products) {
    return products
      .map(
        (product) => `
          <div class="product-card" data-id="${product.id}">
            <div class="off-${product.discount} ${
          product.new ? "new" : ""
        }"></div>
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

  _calculateDiscountedPrice(product) {
    let calculatedPrice =
      product.price - (product.price * product.discount) / 100;
    if (calculatedPrice % 1 !== 0) calculatedPrice = calculatedPrice.toFixed(2);
    return calculatedPrice;
  }
}

export default new ProductListView();

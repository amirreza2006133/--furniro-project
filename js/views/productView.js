import starsImage from "../../img/icons/starts.png";
import facebookIcon from "../../img/facebook.svg";
import linkedinIcon from "../../img/linkedin.svg";
import twitterIcon from "../../img/twitter.svg";
import { formatCurrency } from "../helper";

class ProductView {
  _parentEl = document.querySelector(".main-product-cart");
  _productQuantity = 1;
  _addProductToCart;
  _loadProduct;

  render(loadProduct, addProductToCart) {
    this._loadProduct = loadProduct;
    this._addProductToCart = addProductToCart;
    this._setupEventListeners();
  }

  reRender(product) {
    const generatedMarkup = this._generateMarkup(product);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
  }

  _setupEventListeners() {
    window.addEventListener("load", this._loadProduct);
    this._parentEl.addEventListener("click", (e) => {
      // if (e.target.classList.contains()) {
      // }
    });

    this._parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-close-btn")) this._closeModal();
      if (e.target.classList.contains("decrease-quantity-btn"))
        this._changeQuantity(-1);
      if (e.target.classList.contains("increase-quantity-btn"))
        this._changeQuantity(1);
    });

    this._parentEl.addEventListener("submit", (e) => this._handleFormSubmit(e));
  }

  _generateMarkup(product) {
    return `
        <aside class="product-aside">
          <div class="side-img">
            <div class="product-aside-img-box">
              <img
                class="product-aside-img"
                src="${product.imageUrl}"
                alt=" a sofa picture"
              />
            </div>
            <div class="product-aside-img-box">
              <img
                class="product-aside-img"
                src="${product.imageUrl}"
                alt=" a sofa picture"
              />
            </div>
            <div class="product-aside-img-box">
              <img
                class="product-aside-img"
                src="${product.imageUrl}"
                alt=" a sofa picture"
              />
            </div>
          </div>
          <div class="main-product-img-holder">
            <img
              class="main-product-img"
              src="${product.imageUrl}"
              alt="${product.name}"
            />
          </div>
        </aside>

        <div class="product-info">
          <p class="product-title">${product.name}</p>
          <span class="product-price">
          ${
            product.discount
              ? ` <span class="price-on"> ${formatCurrency(
                  this._calculateDiscountedPrice(product)
                )} </span>`
              : `<span class="price-on">${formatCurrency(product.price)}</span>`
          }

          ${
            product.discount
              ? `<span class="price-off">${formatCurrency(
                  product.price
                )} </span>`
              : ""
          }
          </span>

          <div class="rating">
            <img src="${starsImage}" alt="customer star rate" />
            <span class="customer-number">5 Customer Review</span>
          </div>
          <p class="product-description">
          ${product.description}
          </p>
          <form class="modal-content product-modal">
            <div class="modal-options">
              <span>Size</span>

              ${this._generateSizeOptions(product.sizes)}
            </div>
            <div class="modal-options">
              <span>Color</span>

              ${this._generateColorOptions(product.colors)}
            </div>
            <div class="modal-controls">
              <div class="quantity-controls">
                <span class="quantity-hover decrease-quantity-btn">-</span>
                <input
                  class="quantity-input"
                  type="text"
                  value="1"
                  disabled=""
                />
                <span class="quantity-hover increase-quantity-btn">+</span>
              </div>
              <input
                type="submit"
                value="Add to cart"
                class="add-to-cart-btn"
              />
            </div>
          </form>
          <div class="share-container">
            <div class="share-flex">
              <span class="share-item">sku</span>
              <span class="share-item">:</span>
              <span class="share-item">SS001</span>
            </div>
            <div class="share-flex">
              <span class="share-item">category</span>
              <span class="share-item">:</span>
              <span class="share-item">Sofas</span>
            </div>
            <div class="share-flex">
              <span class="share-item">tags</span>
              <span class="share-item">:</span>
              <span class="share-item">Sofa, Chair, Home, Shop</span>
            </div>
            <div class="share-flex">
              <span class="share-item">sku</span>
              <span class="share-item">:</span>
              <div class="share-icons">
                <img src="${facebookIcon}" alt="a facebook logo icon" />
                <img src="${linkedinIcon}" alt="a linkedin logo icon" />
                <img src="${twitterIcon}" alt="a twitter logo icon" />
              </div>
            </div>
          </div>
        </div>
    `;
  }

  _generateColorOptions(colors) {
    return `
        <div class="inputs color">
          ${colors
            .map(
              (color, index) => `
            <input type="radio" id="${color}" name="color" value="${color}" ${
                index === 0 ? "checked" : ""
              } />
            <label for="${color}" style="background-color: ${color.toLowerCase()};"></label>`
            )
            .join("")}
        </div>`;
  }

  _generateSizeOptions(sizes) {
    return `
        <div class="inputs size">
          ${sizes
            .map(
              (size, index) => `
            <input type="radio" id="${size}" name="size" value="${size}" ${
                index === 0 ? "checked" : ""
              } />
            <label for="${size}">${size}</label>`
            )
            .join("")}
        </div>`;
  }

  _calculateDiscountedPrice(product) {
    let calculatedPrice =
      product.price - (product.price * product.discount) / 100;
    if (calculatedPrice % 1 !== 0) calculatedPrice = calculatedPrice.toFixed(2);
    return calculatedPrice;
  }

  _changeQuantity(change) {
    this._productQuantity = Math.max(1, this._productQuantity + change);
    this._updateQuantityDisplay();
  }

  _updateQuantityDisplay() {
    const quantityInput = this._parentEl.querySelector(".quantity-input");
    quantityInput.value = this._productQuantity;
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productDetails = {
      ...this._currentProduct,
      color: formData.get("color"),
      size: formData.get("size"),
      quantity: this._productQuantity,
    };

    this._addProductToCart(productDetails);
    this._handleResetForm();
    console.log(productDetails);
  }

  _handleResetForm() {
    this._parentEl.querySelector("form").reset();
    this._productQuantity = 1;
  }
}

export default new ProductView();

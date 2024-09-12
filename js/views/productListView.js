class ProductListView {
  _parentElement = document.querySelector(".card-container");
  _modalElement = document.querySelector(".modal-container");
  _findProductById;
  _addProductToCart;
  _currentProduct;
  _productQuantity = 1;

  render(products, findProductById, addProductToCart) {
    this._findProductById = findProductById;
    this._addProductToCart = addProductToCart;

    const markup = this._generateMarkup(products);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._setupEventListeners();
  }

  _setupEventListeners() {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("show-modal")) this._openModal(e);
    });

    this._modalElement.addEventListener("submit", (e) =>
      this._handleFormSubmit(e)
    );
    this._modalElement.addEventListener("click", (e) => {
      this._handleQuantityChange(e);
    });
  }

  _generateMarkup(products) {
    return products
      .map(
        (product) => `
          <div class="product-card" data-id="${product.id}">
            <div class="off-${product.discount}">
              <div class="gradiant"></div>
              <a class="hover-btn show-modal" href="#"> Add to cart </a>
              <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <ion-icon name="share-social-outline"></ion-icon>
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <ion-icon name="git-compare-outline"></ion-icon>
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span>like</span>
                  </a>
                </div>
              </nav>
  
              <img
                class="product-card-image"
                src="${product.imageUrl}"
                alt="A stylish caffe chair"
              />
              <div class="product-card-info">
                <h3 class="heading-tertiary">${product.name}</h3>
                <span class="tag">${product.description}</span>
                <p class="card-price">
                  <span class="price-on"> ${product.currency}${
          product.price
        } </span>
                  <span class="price-off"> ${this._calculateDiscountedPrice(
                    product
                  )} </span>
                </p>
              </div>
            </div>
          </div>`
      )
      .join("");
  }

  _calculateDiscountedPrice(product) {
    return (product.price - (product.price * product.discount) / 100).toFixed(
      2
    );
  }

  _openModal(e) {
    this._modalElement.classList.add("active");
    const productId = e.target.closest(".product-card").dataset.id;
    this._currentProduct = this._findProductById(productId);

    this._renderModalContent();
  }

  _renderModalContent() {
    const markup = `
      <div class="modal-content">
        <div class="modal-close">
          <span class="modal-close-btn">✖</span>
        </div>
        <span>${this._currentProduct.name}</span>
        <div class="modal-options">
          <span>Size</span>
          ${this._generateSizeOptions(this._currentProduct.sizes)}
        </div>
        <div class="modal-options">
          <span>Color</span>
          ${this._generateColorOptions(this._currentProduct.colors)}
        </div>
        <div class="modal-controls">
          <div class="quantity-controls">
          <span class="decrease-quantity-btn">-</span>
          <input class="quantity-input" type="text" value="${
            this._productQuantity
          }" disabled />
          <span class="increase-quantity-btn">+</span>
          </div>
          <input type="submit" value="add to cart" class="add-to-cart-btn">
        </div>
      </div>`;
    this._modalElement.innerHTML = markup;
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
        <label for="${color}" style="background-color: ${color.toLowerCase()};"></label>
        `
      )
      .join("")}
    </div>
    `;
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
    </div>
    `;
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
    this._modalElement.classList.remove("active");
  }

  _handleQuantityChange(e) {
    if (e.target.classList.contains("decrease-quantity-btn"))
      this._changeQuantity(-1);
    if (e.target.classList.contains("increase-quantity-btn"))
      this._changeQuantity(1);
  }

  _changeQuantity(change) {
    this._productQuantity = Math.max(1, this._productQuantity + change);
    this._updateQuantityDisplay();
  }

  _updateQuantityDisplay() {
    const quantityInput = this._modalElement.querySelector(".quantity-input");
    quantityInput.value = this._productQuantity;
  }
}

export default new ProductListView();

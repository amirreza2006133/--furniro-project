class ProductModalView {
  _modalElement = document.querySelector(".modal-container");
  _productQuantity = 1;
  _currentProduct;
  _addProductToCart;

  render(addProductToCart) {
    this._addProductToCart = addProductToCart;
    this._setupEventListeners();
  }

  openModal(product) {
    this._currentProduct = product;
    this._renderModalContent();
    this._modalElement.classList.add("active");
  }

  _setupEventListeners() {
    this._modalElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-close-btn")) this._closeModal();
      if (e.target.classList.contains("decrease-quantity-btn"))
        this._changeQuantity(-1);
      if (e.target.classList.contains("increase-quantity-btn"))
        this._changeQuantity(1);
    });

    this._modalElement.addEventListener("submit", (e) =>
      this._handleFormSubmit(e)
    );
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
            <input type="submit" value="Add to cart" class="add-to-cart-btn">
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
    this._closeModal();
    this._handleResetForm();
  }

  _changeQuantity(change) {
    this._productQuantity = Math.max(1, this._productQuantity + change);
    this._updateQuantityDisplay();
  }

  _updateQuantityDisplay() {
    const quantityInput = this._modalElement.querySelector(".quantity-input");
    quantityInput.value = this._productQuantity;
  }

  _closeModal() {
    this._modalElement.classList.remove("active");
  }

  _handleResetForm() {
    this._modalElement.reset();
    this._productQuantity = 1;
  }
}

export default new ProductModalView();

class ProductListView {
  _parentElement = document.querySelector(".card-container");
  _findProductById;
  modalView;

  render(products, findProductById, modalView) {
    this._findProductById = findProductById;

    const markup = this._generateMarkup(products);
    this._parentElement.innerHTML = markup;
    this.modalView = modalView;
    this._setupEventListeners();
  }

  _setupEventListeners() {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("show-modal")) this._openProductModal(e);
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
                  <a href="#"><ion-icon name="share-social-outline"></ion-icon><span>share</span></a>
                </div>
                <div class="hover-nav-item">
                  <a href="#"><ion-icon name="git-compare-outline"></ion-icon><span>compare</span></a>
                </div>
                <div class="hover-nav-item">
                  <a href="#"><ion-icon name="heart-outline"></ion-icon><span>like</span></a>
                </div>
              </nav>
  
              <img class="product-card-image" src="${product.imageUrl}" alt="${
          product.name
        }" />
              <div class="product-card-info">
                <h3 class="heading-tertiary">${product.name}</h3>
                <span class="tag">${product.description}</span>
                <p class="card-price">
                  <span class="price-on"> ${product.currency}${
          product.price
        } </span> 
        ${
          product.discount ?
          `<span class="price-off"> ${this._calculateDiscountedPrice(
            product
          )} </span>` : ""
        }
                </p>
              </div>
            </div>
          </div>`
      )
      .join("");
  }

  _calculateDiscountedPrice(product) {
    console.log(product.discount);

    return (product.price - (product.price * product.discount) / 100).toFixed(
      2
    );
  }

  _openProductModal(e) {
    const productId = e.target.closest(".product-card").dataset.id;
    const currentProduct = this._findProductById(productId);

    // Pass the current product to the modal view
    this.modalView.openModal(currentProduct);
  }
}

export default new ProductListView();

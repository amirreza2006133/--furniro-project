class ProductListView {
  _parentEl = document.querySelector(".card-container");
  _modalEl = document.querySelector(".modal-container");
  _findItem;
  _addItemToTheCart;
  _currentItem;
  _itemQuantity = 1;

  render(shopItems, findItemInItemsList, addItemToTheCart) {
    const generatedMarkup = this._generateMarkup(shopItems);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
    this._findItem = findItemInItemsList;
    this._addItemToTheCart = addItemToTheCart;
    this._eventListener();
  }

  _eventListener() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("show-modal")) this._showModal(e);
    });

    this._modalEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitModalForm(e);
    });

    this._modalEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("decrease-quantity-btn"))
        this._decreaseQuantity();

      if (e.target.classList.contains("increase-quantity-btn"))
        this._increaseQuantity();
    });
  }

  _generateMarkup(shopItems) {
    return shopItems
      .map(
        (item) => `
          <div class="product-card" data-id="${item.id}">
            <div class="off-${item.off}">
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
                src="${item.image}"
                alt="a Stylish caffe chair"
              />
              <div class="product-card-info">
                <h3 class="heading-tertiary">${item.name}</h3>
                <span class="tag">${item.tag}</span>
                <p class="card-price">
                <span class="price-on"> ${item.price}${item.priceUnit} </span>
                <span class="price-off"> ${
                  (item.price * item.off) / 100 - item.price
                } </span>
                </p>
              </div>
            </div>
          </div>
      `
      )
      .join("");
  }

  _showModal(e) {
    this._modalEl.classList.add("active");
    this._currentItem = this._findItem(
      e.target.closest(".product-card").dataset.id
    );

    const generatedMarkup = `
     <div class="add-item-to-cart-modal">
        <b>${this._currentItem.name}</b>
        <br>
        <b>colors:</b>
        ${this._currentItem.colors
          .map(
            (color, i) => `
          <input type="radio" checked="${
            i === 0
          }" id="${color}" name="color" value="${color}"/>
          <label for="${color}">${color}</label>
        `
          )
          .join("")}
        <br>
        <b>sizes</b>
        ${this._currentItem.sizes
          .map(
            (size, i) => `
            <input type="radio" checked="${
              i === 0
            }" id="${size}" name="size" value="${size}"/>
            <label for="${size}">${size}</label>
          `
          )
          .join("")}
        <br>
        <div>
          <div class="decrease-quantity-btn">-</div>
          <input class="quantity" type="text" name="quantity" disabled value="${
            this._itemQuantity
          }"/>
          <div class="increase-quantity-btn">+</div>
      </div>
      <input type="submit" value="add" />
    </div>
    `;
    this._modalEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }

  _submitModalForm(e) {
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const newItem = {
      ...this._currentItem,
      ...formValues,
      quantity: this._itemQuantity,
    };

    this._addItemToTheCart(newItem);
  }

  _decreaseQuantity() {
    if (this._itemQuantity <= 1) return;
    this._itemQuantity -= 1;
    this._updateQuantityInInterface();
  }

  _increaseQuantity() {
    this._itemQuantity += 1;
    this._updateQuantityInInterface();
  }

  _updateQuantityInInterface() {
    const el = this._modalEl.querySelector(".quantity");
    el.value = this._itemQuantity;
  }
}

export default new ProductListView();
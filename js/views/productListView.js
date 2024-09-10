class ProductListView {
  _parentEl = document.querySelector(".card-container");
  _modalEl = document.querySelector(".modal-container");
  _findItem;
  render(shopItems, findItemInItemsList) {
    const generatedMarkup = this._generateMarkup(shopItems);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
    this._findItem = findItemInItemsList;
    this._eventListener();
  }

  _eventListener() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("show-modal")) {
        this._showModal(e);
      }
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
    const userTargetItem = this._findItem(
      e.target.closest(".product-card").dataset.id
    );
    const generatedMarkup = `
     <div class="add-item-to-cart-modal">
        <b>${userTargetItem.name}</b>
        <br>
        <b>colors:</b>
        ${userTargetItem.colors
          .map(
            (color) => `
          <input type="radio" id="${color}"/>
          <label for="${color}">${color}</label>
        `
          )
          .join("")}
        <br>
        <b>sizes</b>
        ${userTargetItem.sizes
          .map(
            (size) => `
            <input type="radio" id="${size}"/>
            <label for="${size}">${size}</label>
          `
          )
          .join("")}
        <br>
        <div>
          <button>-</button>
          <b>0</b>
          <button>+</button>
      </div>
      <button>add</button>
    </div>
    `;
    this._modalEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }
}

export default new ProductListView();

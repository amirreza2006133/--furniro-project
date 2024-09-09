class ProductListView {
  _parentEl = document.querySelector(".card-container");

  render(shopItems) {
    const generatedMarkup = this._generateMarkup(shopItems);
    this._parentEl.insertAdjacentHTML("afterbegin", generatedMarkup);
  }

  _generateMarkup(shopItems) {
    return shopItems
      .map(
        (item) => `
            <div class="product-card">
            <div class="off-${item.off}">
              <div class="gradiant"></div>
              <a class="hover-btn" href="#"> Add to cart </a>
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
}

export default new ProductListView();

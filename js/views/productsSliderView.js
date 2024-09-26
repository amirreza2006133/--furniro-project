import Swiper from "swiper";

class ProductsSliderView {
  _swiper;
  _parentEl = document.querySelector(".products-slider-list");
  _navigationEl = document.querySelector(".products-slider-navigation");

  render(slides) {
    const generatedMarkup = this._generateMarkup(slides);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
    this._renderSwiper();
    this._renderNavigation();
  }

  _renderSwiper() {
    this._swiper = new Swiper(".products-slider", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    });
  }

  _generateMarkup(slides) {
    return slides
      .map(
        (slide, i) => `
        <div class="swiper-slide products-slider-list-item">
            <div class="list-item-wrapper">
              <img class="background" src="${slide.imageUrl}" alt="${
          slide.title
        }">
              <div class="info">
                <span>${i + 1} - ${slide.title}</span>
                <b>${slide.description}</b>
              </div>
            </div>
        </div>
    `
      )
      .join("");
  }

  _renderNavigation() {
    this._navigationEl.addEventListener("click", (e) => {
      const target = e.target.closest("button");
      if (target.classList.contains("products-slider-prev-slide"))
        this._swiper.slidePrev();

      if (target.classList.contains("products-slider-next-slide"))
        this._swiper.slideNext();
    });
  }
}

export default new ProductsSliderView();

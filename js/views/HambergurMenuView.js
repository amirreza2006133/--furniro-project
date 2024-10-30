class HambergurMenuView {
  _parentEl = document.body;
  _headerEl = document.querySelector(".header");
  _mainEl = document.querySelector(".menu-fade-flag");

  render() {}
  addEventHandler(render) {
    window.addEventListener("load", render);
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("open-mb-menu"))
            this._parentEl.classList.add("show-mobile-nav");
        if (e.target.classList.contains("close-mb-menu"))
            this._parentEl.classList.remove("show-mobile-nav");
    });
    this._setupIntersectionObserver();
  }
  
  _setupIntersectionObserver() {
    const observerOptions = { root: null, threshold: 0.1 };
    const observerClb = function ([entry]) {
        if (!entry.isIntersecting) {
            this._headerEl.classList.add("fade");
        } else {
            this._headerEl.classList.remove("fade");
        }
    };
    const menuIntersectionObserevr = new IntersectionObserver(observerClb.bind(this), observerOptions);
    menuIntersectionObserevr.observe(this._mainEl);
  }
}

export default new HambergurMenuView();

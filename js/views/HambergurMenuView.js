class HambergurMenuView {
    _parentEl = document.body;
    render() {}
    addEventHandler(render) {
        window.addEventListener("load", render)
        window.addEventListener("click",e => {
            if (e.target.classList.contains("open-mb-menu")) this._parentEl.classList.add("show-mobile-nav")
            if (e.target.classList.contains("close-mb-menu")) this._parentEl.classList.remove("show-mobile-nav")
        })
    }
}

export default new HambergurMenuView();
class FooterView {
  render() {
    const yearEL = document.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEL.textContent = currentYear;
  }

  addEventHandler(render) {
    window.addEventListener("load", render)
  }
}

export default new FooterView();

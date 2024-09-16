class FooterView {
  render() {
    const yearEL = document.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEL.textContent = currentYear;
  }
}

export default new FooterView();

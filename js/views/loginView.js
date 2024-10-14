class LoginView {
  _parentEl = document.querySelector(".login-container");

  render() {}

  addEventHandler() {
    const loginBtn = document.querySelector(".login-link");
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this._parentEl.classList.toggle("transform");
      loginBtn.textContent = loginBtn.textContent === "Sign up" ? "Login" : "Sign up"
    });
  }
  _generateMarkup() {}
}

export default new LoginView();

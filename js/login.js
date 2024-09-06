const loginEL = document.querySelector(".login-link");
const logContainerEL = document.querySelector(".login-container");

loginEL.addEventListener("click", function () {
  logContainerEL.classList.toggle("transform");
  loginEL.textContent = "sign up";
});

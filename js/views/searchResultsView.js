import { formatCurrency } from "../helper";
import arrowIcon from "../../img/icons/arrow-to-right.svg";

class searchResultsView {
  _searchInput = document.querySelector(".search");
  _parentEl = document.querySelector(".search-results");
  _messageEl = document.querySelector(".message");

  render(results) {
    this._parentEl.innerHTML = "";
    this._renderMessage("");
    if (typeof results === "string") return this._renderMessage(results);
    const generatedMarkup = this._generateMarkup(results);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
  }
  addEventHandler(render, goToDetailsPage) {
    window.addEventListener("load", () => render());
    this._searchInput.addEventListener("keyup", (e) => {
      render(e.target.value);
    });
    this._parentEl.addEventListener("click", (e) => {
      const productId = e.target.closest(".search-result")?.dataset?.id;
      if (e.target.closest(".search-result")) {
        this._searchInput.value = "";
        goToDetailsPage(productId);
      }
    });
  }
  _generateMarkup(results) {
    return results
      .map(
        (result) => `
        <li class="search-result" data-id="${result.id}">
        <img class="thumb" src="${result.imageUrl}" alt="${result.name}">
        <b class="title">${result.name}</b>
        <span class="price">${formatCurrency(result.price)}</span>
        <button class="go-to-product-detail">View details <img src="${arrowIcon}" alt="=>" /></button>
      </li>    
    `
      )
      .join("");
  }
  _renderMessage(message) {
    this._messageEl.textContent = message;
  }
}

export default new searchResultsView();

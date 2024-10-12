import { COUNT_PAGINATION_ITEMS } from "../config";
import boxIcon from "../../img/icons/grid.svg";
import inlineIcon from "../../img/icons/pages.svg";

class SortProductView {
  _parentEl = document.querySelector(".product-fliters");
  _viewMode = "box";
  _countItems = COUNT_PAGINATION_ITEMS;
  _sortBy = "default";
  _renderer;

  render(countPagItems) {
    this._parentEl.innerHTML = "";
    const generatedMarkup = this._generateMarkup(countPagItems);
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup);
    this._addInputEventHandler(0);
  }

  _submitSort() {
    this._renderer({
      countItems: this._countItems,
      sortBy: this._sortBy,
      viewMode: this._viewMode,
    });
  }

  addEventHandler(render) {
    window.addEventListener("load", () => {
      this._renderer = render;
      this._submitSort();
    });

    this._parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-mode")) {
        this._viewMode = e.target.dataset.viewmode;
        this._submitSort();
      }
    });
  }

  _addInputEventHandler() {
    const sortByEl = this._parentEl.querySelector(".input-sortBy");
    sortByEl.addEventListener("change", (e) => {
      this._sortBy = e.target.value;
      this._submitSort();
    });

    const countItemsEl = this._parentEl.querySelector(".countIndex");
    countItemsEl.addEventListener("change", (e) => {
      if (this._validatePageItemsCountInput(Number(e.target.value))) {
        this._countItems = Number(e.target.value);
        countItemsEl.previousElementSibling.textContent = "Show"
        countItemsEl.previousElementSibling.classList.remove("error")
        this._submitSort();
      } else {
        countItemsEl.previousElementSibling.textContent = `${countItemsEl.value} is not valid max 32 and min 8`
        countItemsEl.previousElementSibling.classList.add("error")
        countItemsEl.value = this._countItems;
      }
    });
  }

  _validatePageItemsCountInput(value) {
    return (value > 100 || value < 8) ? false : true;
  }

  _generateMarkup(countPagItems) {
    return `<div class="filter-icon">
        <img class="view-mode box" data-viewMode="box" src="${boxIcon}" alt=" grid 2 icon" />
        <img class="border-right view-mode inline" data-viewMode="inline" src="${inlineIcon}" alt=" pages icon" />
        <p class="show-filter pag-title"></p>
      </div>
  
      <div class="filters-input">
        <label class="filter-label" for="number"> Show</label>
        <input type="number" class="in-num countIndex" id="number" max="32" min="1" value="${countPagItems}"/>
        <label class="filter-label" for="select">Sort by</label>
          <select class="input-select input-sortBy" id="select">
            <option value="default" ${this._sortBy === 'default' ? 'selected' : ''}>Default</option>
            <option value="off" ${this._sortBy === 'off' ? 'selected' : ''}>Off</option>
            <option value="new" ${this._sortBy === 'new' ? 'selected' : ''}>New</option>
          </select>
      </div>`;
  }
}

export default new SortProductView();

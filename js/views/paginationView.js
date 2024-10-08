import { COUNT_PAGINATION_BUTTONS } from "../config";

class PaginationView {
  _parentEl = document.querySelector(".pagination-list");

  render(index, countIndex) {
    const generatedMarkup = this._generateMarkup(index, countIndex);
    this._parentEl.innerHTML = ""
    this._parentEl.insertAdjacentHTML("beforeend", generatedMarkup)
  }

  addEventHandler(render) {
    window.addEventListener("load", () => render());
    this._parentEl.addEventListener("click", e => {
      if (e.target.classList.contains("pagination-item")) render(Number(e.target.dataset.goto))
    })
  }

  _generateMarkup(index, countIndex) {
    // 0: 1. 2 3 => // 7 -  0 = 7
    // 1: <= 2. 3 4 => // 7 - 1 = 6
    // 2: <= 3. 4 5 => // 7 - 2 = 5
    // 3: <= 4. 5 6 => // 7 - 3 = 4
    // 4: <= 5. 6 7 => // 7 - 4 = 3
    // 5: <= 6. 7 => // 7 - 5 = 2
    // 6: <= 7. // 7 - 6 = 1

    const countButtons =
      countIndex - index < COUNT_PAGINATION_BUTTONS
        ? COUNT_PAGINATION_BUTTONS - 1
        : COUNT_PAGINATION_BUTTONS;

    // prettier-ignore
    const paginationNumBtns = Array.from({ length: countButtons }, (_, i) => i).map((i) =>`<li class="pagination-item ${i === 0 ? "fill-pag" : ""}" data-goto="${index + i}">${index + (i + 1)}</li>`).join("");
    const paginatioPrevBtn = `<li class="pagination-item" data-goto="${index - 1}">prev</li>`;
    const paginationNextBtn = `<li class="pagination-item" data-goto="${index + 1}">next</li>`;

    // just one index
    if (index === 0 && countIndex === 0)
      return `<li class="pagination-item fill-pag data-goto="${0}">1</li>`;

    // index = 0
    if (index == 0 && index != countIndex)
      return `${paginationNumBtns}${paginationNextBtn}`;

    // last index
    if (index === countIndex - 1)
      return `${paginatioPrevBtn} <li class="pagination-item fill-pag" data-goto="${countIndex - 1}">${countIndex}</li>`;
    

    // index is not 0 and there is more
    if (index !== 0 && index !== countIndex && index < countIndex)
      return `${paginatioPrevBtn}${paginationNumBtns}${paginationNextBtn}`;
  }
}

export default new PaginationView();

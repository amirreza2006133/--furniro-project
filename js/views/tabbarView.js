class TabbarView {
  _headingsParentEl = document.querySelector(".heading-container");
  _tabsParentEl = document.querySelector(".Review-section-p-holder");

  render(tabs) {
    const headingsGeneratedMarkup = this._generateHeadingsMarkup(
      tabs.reduce((prev, curr, i) => {
        prev[i] = curr.title;
        return prev;
      }, [])
    );

    const tabsGeneratedMarkup = this._generateTabsMarkup(
      tabs.reduce((prev, curr, i) => {
        prev[i] = curr.description;
        return prev;
      }, [])
    );

    this._headingsParentEl.insertAdjacentHTML("beforeend", headingsGeneratedMarkup)
    this._tabsParentEl.insertAdjacentHTML("beforeend", tabsGeneratedMarkup)

    this._initTabbar()
  }

  addEventHandler(render) {
    window.addEventListener("load", render);
  }

  _generateHeadingsMarkup(headings) {
    return headings
      .map((heading, i) => `<h3 class="Review-heading" data-id="${i}">${heading}</h3>`)
      .join("");
  }

  _generateTabsMarkup(tabs) {
    return tabs.map(
      (tab, i) =>
        `<div class="reviews-boxes" data-id="${i}">
            ${
              tab.paragraphes
                ? tab.paragraphes
                    .map(
                      (p) =>
                        `<p class="Review-section-p Description-p">${p}</p>`
                    )
                    .join("")
                : ""
            }
            
            <div class="review-img-flex">
            ${
              tab.images
                ? tab.images
                    .map((img) => `<img src="${img}" alt="a sofa photo" />`)
                    .join("")
                : ""
            }
            </div>
        </div>`
    );
  }

  _initTabbar() {
    // activating the first
    const firstHeading = document.querySelector(".Review-heading")
    const firstTab = document.querySelector(".reviews-boxes")
    firstHeading.classList.add("show");
    firstTab.classList.add("Description-container");

    this._headingsParentEl.addEventListener("click", e => {
      
      if (e.target.classList.contains("Review-heading")) {
        // deactivating the current active tab
        const currentActiveHeading = document.querySelector(".Review-heading.show")
        const currentActiveTab = document.querySelector(".Description-container")
        currentActiveHeading && currentActiveHeading.classList.remove("show")
        currentActiveTab && currentActiveTab.classList.remove("Description-container")  

        // activating the clicked tab
        const tabId = e.target.dataset.id;
        const relatedTab = document.querySelector(`.reviews-boxes[data-id="${tabId}"]`)
        e.target.classList.add("show")
        relatedTab.classList.add("Description-container")
      }
    })
  }
}

export default new TabbarView();

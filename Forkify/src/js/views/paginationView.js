import View from './view';
import icons from 'url:../../img/icons.svg'; //parcel 2

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addBtnHandle(handle) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      //   console.log(btn);
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      //   console.log(gotoPage);
      handle(gotoPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.renderPerPage,
    );
    // console.log(numPages);
    //when on page1 and there are other pages
    if (currPage === 1 && numPages > 1) {
      return ` <button data-goto = "${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    //when on other page
    if (currPage < numPages) {
      return `<button data-goto = "${currPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
          
         <button data-goto = "${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    //when on last page
    if (currPage === numPages && numPages > 1) {
      return `<button data-goto = "${currPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>`;
    }

    //when on page 1 and no other pages

    return '';
  }
}

export default new PaginationView();

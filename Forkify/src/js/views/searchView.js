class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }

  _clearField() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandleSearch(handle) {
    this._parentEl.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        handle();
        this._clearField();
      }.bind(this),
    );
  }
}

export default new SearchView();

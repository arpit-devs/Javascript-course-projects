import View from './view';
import icons from 'url:../../img/icons.svg'; //parcel 2

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _message = 'Recipe uploaded successfully';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this.addHandleRecipeView();
    this.addHandleHideRecipe();
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  addHandleRecipeView() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandleHideRecipe() {
    [this._btnClose, this._overlay].forEach(el =>
      el.addEventListener('click', this.toggleWindow.bind(this)),
    );
  }

  addHandleUpload(handle) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handle(data);
    });
  }
}

export default new AddRecipeView();

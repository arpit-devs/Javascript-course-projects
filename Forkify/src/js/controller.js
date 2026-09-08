import * as Model from './model';
import RecipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import paginationView from './views/paginationView';
import bookmarkView from './views/bookmarkView';
import addRecipeView from './views/addRecipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// removed duplicate import and unused variable
const recipeView = new RecipeView();

// if (module.hot) {
//   module.hot.accept();
// }

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);
    if (!id) return;
    recipeView.renderSpinner();
    await Model.loadRecipe(id);
    recipeView.render(Model.state.recipe);
    //1 update class
    resultView.update(Model.getSearchResultPage());
    bookmarkView.update(Model.state.bookmark);
    //Loadinig recipe

    //Rendering recipe
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultView.renderSpinner();
    // console.log(query);
    await Model.loadSearchResult(query);
    // console.log(Model.state.search.result);
    // resultView.render(Model.state.search.result);
    resultView.render(Model.getSearchResultPage());
    paginationView.render(Model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (gotoPage) {
  resultView.render(Model.getSearchResultPage(gotoPage));
  paginationView.render(Model.state.search);
};

const controlServing = function (updateTo) {
  Model.updateServing(updateTo);
  recipeView.update(Model.state.recipe);
};

const controlBookmark = function () {
  //Add/remove bookmarks
  if (!Model.state.recipe.bookmarked) {
    Model.addBookMark(Model.state.recipe);
  } else {
    Model.deleteBookMark(Model.state.recipe.id);
  }
  //2 update bookmarks
  recipeView.update(Model.state.recipe);
  //3 show bookmarks
  bookmarkView.render(Model.state.bookmark);
};

const controlBookmarkRender = function () {
  bookmarkView.render(Model.state.bookmark);
};

const controlUploadRecipe = async function (data) {
  // console.log(data);
  try {
    await Model.updateData(data);
    //render recipe
    recipeView.render(Model.state.recipe);
    //success message
    addRecipeView.renderMessage();

    //render bookmark
    bookmarkView.render(Model.state.bookmark);
    //change ID in url
    window.history.pushState(null, '', `#${Model.state.recipe.id}`);

    //toggle window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, 2500);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

// controlRecipe();
const init = function () {
  recipeView.addRenderHandle(controlRecipe);
  recipeView.addHandleUpdateServing(controlServing);
  recipeView.addHandleBookmark(controlBookmark);
  searchView.addHandleSearch(controlSearchResult);
  paginationView.addBtnHandle(controlPagination);
  bookmarkView.addHandleRender(controlBookmarkRender);
  addRecipeView.addHandleUpload(controlUploadRecipe);
};

init();

// let num = 345;
// let reverse = 0;

// while (num > 0) {
//   let lastDigit = num % 10;
//   reverse = reverse * 10 + lastDigit;
//   num = Math.floor(num / 10);
// }

// console.log(reverse);

import { API_URL, KEY, REN_PER_PAGE } from './config';
// import { getJson, sendJson } from './helper';
import { AJAX } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    renderPerPage: REN_PER_PAGE,
  },
  bookmark: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    image: recipe.image_url.replace('http://', 'https://'),
    publisher: recipe.publisher,
    ingredients: recipe.ingredients,
    servings: recipe.servings,
    title: recipe.title,
    sourceUrl: recipe.source_url,
    cookingTime: recipe.cooking_time,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    // console.log(res);
    // console.log(data);

    state.recipe = createRecipeObject(data);

    if (state.bookmark.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    // console.log(state.recipe);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.result = data.data.recipes.map(rec => {
      return {
        image: rec.image_url,
        publisher: rec.publisher,
        id: rec.id,
        title: rec.title,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const perPage = state.search.renderPerPage || 10;
  const start = (page - 1) * perPage; //0
  const end = page * perPage; //perPage
  return state.search.result.slice(start, end);
};

export const updateServing = function (newServing) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServing) / state.recipe.servings;
  });
  state.recipe.servings = newServing;
};

const persistBookmark = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
};

export const addBookMark = function (recipe) {
  if (!state.bookmark.some(b => b.id === recipe.id))
    state.bookmark.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmark();
};

export const deleteBookMark = function (id) {
  const index = state.bookmark.findIndex(bookmark => bookmark.id === id);
  if (index !== -1) state.bookmark.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmark();
};

export const updateData = async function (newRecipe) {
  // console.log(Object.entries(data));
  const ingredients = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      const ingArr = ing[1].replaceAll(' ', '').split(',');
      if (ingArr.length !== 3) throw new Error('Invalid format');

      const [quantity, unit, description] = ingArr;
      return { quantity: quantity ? +quantity : null, unit, description };
    });

  const recipe = {
    title: newRecipe.title,
    image_url: newRecipe.image,
    source_url: newRecipe.sourceUrl,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients: ingredients,
  };
  console.log(recipe);
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  console.log(data);
  state.recipe = createRecipeObject(data);

  addBookMark(state.recipe);
};

const init = function () {
  try {
    const storage = JSON.parse(localStorage.getItem('bookmarks'));
    if (storage) state.bookmark = storage;
  } catch (err) {
    state.bookmark = [];
  }
};

init();

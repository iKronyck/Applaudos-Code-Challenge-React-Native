import {ADD_TO_FAVORITES, DELETE_OF_FAVORITES} from '../actions/favorites';

const initialFavorites = {
  favorites: [],
};

export default (state = initialFavorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case DELETE_OF_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

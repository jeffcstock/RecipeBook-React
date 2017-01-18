import { combineReducers } from 'redux';
import RecipeReducer from './recipe_reducer';

const rootReducer = combineReducers({
  recipes: RecipeReducer
});

export default rootReducer;

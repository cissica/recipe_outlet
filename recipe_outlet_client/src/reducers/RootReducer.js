import { combineReducers } from 'redux';
import { favoritesReducer } from './Favoritesreducer';
import { recipesReducer } from './RecipesReducer'
import { userReducer } from './UsersReducer';


export const rootReducer  = combineReducers({
    user: userReducer,
    recipes: recipesReducer,
    favorites: favoritesReducer
})
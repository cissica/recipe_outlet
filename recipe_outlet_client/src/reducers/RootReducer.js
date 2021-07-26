import { combineReducers } from 'redux';
import { usersReducer } from './UsersReducer'
import { recipesReducer } from './RecipesReducer'


export const rootReducer  = combineReducers({
    users: usersReducer,
    recipes: recipesReducer
})
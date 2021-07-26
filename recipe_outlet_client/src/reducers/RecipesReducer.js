export const recipesReducer = (state = { recipes: [], requesting: false }, action) => {
    switch (action.type) {
  
          case 'START_ADDING_RECIPES_REQUEST':
            return {
                ...state,
                recipes: [...state.recipes],
                requesting: true
            }
      
          case 'ADD_RECIPES':
            return {
                ...state,
                recipes: action.recipes,
                requesting: false
            }
      
          default:
            return state
        }
}
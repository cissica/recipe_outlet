
export const favoritesReducer = (state = { recipes: [], requesting: false }, action) => {

    switch(action.type){
        case 'START_ADDING_FAVES_REQUEST':
            return {
                ...state,
                recipes: [],
                requesting: true
            }
      
          case 'ADD_FAVES':
            return {
                ...state,
                recipes: action.recipes,
                requesting: false
            }
      
          default:
            return state
        
    }
}


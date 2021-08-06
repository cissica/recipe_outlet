
export const userReducer = (state = { user: "", token: "", loggedIn: false, requesting: false }, action) => {
    switch (action.type) {
  
        case 'START_ADDING_USER_REQUEST':
            return {
                ...state,
                user: [...state.user],
                token: [...state.token],
                requesting: true
            }

        case 'ADD_USER':
            return {
                ...state,
                user: action.user,
                token: action.token,
                loggedIn: true,
                requesting: false
            }

        case 'LOGGED_IN':
            return{
                ...state,
                loggedIn: true
            }
        
        case 'LOGOUT_USER':
            return{
                ...state,
                user: {},
                token: "",
                loggedIn: false
            }
    
          default:
            return state
        }
}
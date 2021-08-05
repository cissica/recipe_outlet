const initialState = {
    user: {},
    token: "",
    loggedIn: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
  
          case 'ADD_USER':
              return{
                  ...state,
                  user: action.user,
                  token: action.token
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
                    token: ""
                }
      
          default:
            return state
        }
}
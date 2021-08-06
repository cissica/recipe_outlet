export function fetchFaves(user) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_FAVES_REQUEST' });
      fetch(`http://localhost:3000/favorites/${user}`, {
        "method": "GET",
        "headers": {
            "Content-Type" : "application/json"
        }
    })
        .then(response => response.json())
        .then(faves => dispatch({type: 'ADD_FAVES', recipes: faves}));
    };
  } 

export function createFave(data){
    
        fetch("http://localhost:3000/favorites", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json" ,
        }
    })
}

export const logoutUser = () => ({
    type: 'CLEAR_FAVES',
    user: {},
    token: "",
    loggedIn: false
})
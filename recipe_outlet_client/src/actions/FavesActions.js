export function fetchFaves(user) {
    return (dispatch) => {
        console.log("hiya")
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
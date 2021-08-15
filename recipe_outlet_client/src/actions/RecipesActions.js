export function fetchRecipes() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_RECIPES_REQUEST' });
      fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=1%2C2%2C3%2C4%2C5%2C6%2C7%2C9%2C10%2C11%2C12%2C13%2C16%2C17%2C18", {
        "method": "GET",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "x-rapidapi-key": "970be4ed69msh6816a01f7da91a2p1bd108jsnd0c09db580e6",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(recipes => dispatch({type: 'ADD_RECIPES', recipes}));
    };
  } 

  
  
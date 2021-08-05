import React, { Component } from 'react';
import { connect } from 'react-redux'
import Recipe from "../component/Recipe";
import { fetchRecipes} from '../actions/RecipesActions';
import { createFave } from '../actions/FavesActions'
// import { createFave } from '../actions/FavesActions'

class RecipeContainer extends Component {
    state = {
        recipe_id: null,
        recipe: null
    }
    
    addRecipe = () => {

        fetch("http://localhost:3000/recipes", {
        method: 'POST',
        body: JSON.stringify(this.state.recipe),
        headers: {
            "Content-Type" : "application/json" ,
        }
    })
    .then(response => response.json())
    .then(data => this.setState({recipe_id: data.id}, () => {
        const data = { recipe_id: this.state.recipe_id, user_id: this.props.user.id } 
        console.log(data)
        createFave(data)
        window.alert("Recipe added to My Account.")
    }))
    
    }

    handleCallback = (recipeData) =>{
        console.log(recipeData[0])
        this.setState({recipe: recipeData[0]}, () => 
        this.addRecipe()) 

        // const data = { recipe_id: this.state.recipe_id, user_id: this.props.user.id } 
        // console.log(data)
        // createFave(data)
     
    }



    render() { 
    
        return ( 
            <div>
                <h2>recipe container</h2>
                <Recipe recipes={this.props.recipes} handleCallback={this.handleCallback}/>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        user: state.user.user,
        recipes: state.recipes.recipes
    }
    
}
 
export default connect(mapStateToProps, { fetchRecipes })(RecipeContainer);
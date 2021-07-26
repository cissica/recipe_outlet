import React, { Component } from 'react';
import { connect } from 'react-redux'
import Recipe from "../component/Recipe";
import { fetchRecipes } from '../actions/RecipesActions';


class RecipeContainer extends Component {

    render() { 
        return ( 
            <div>
                <h2>recipe container</h2>
                <Recipe recipes={this.props.recipes}/>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        
        recipes: state.recipes.recipes,
        requesting: state.recipes.requesting
    }
    
}
 
export default connect(mapStateToProps, { fetchRecipes })(RecipeContainer);
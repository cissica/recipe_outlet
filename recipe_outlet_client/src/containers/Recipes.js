import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/RecipesActions';
import RecipesList from '../component/RecipesList';

class Recipes extends Component {
    componentDidMount() {
        if (this.props.recipes.length === 0)
            this.props.fetchRecipes()
        }
    
    render() { 
        
        return ( 
            <div>
            <h2>Recipes container</h2>
            <RecipesList recipes={this.props.recipes} requesting={this.props.requesting}/>
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
 
export default connect(mapStateToProps, { fetchRecipes })(Recipes);
import React from 'react';
import { useParams } from "react-router-dom"
import parse from 'html-react-parser';

const Recipe = (props) => {

    const { id } = useParams();
    
    const recipe = props.recipes.filter(recipe => recipe.id === parseInt(id)).map(filteredRecipe => ({
        title: filteredRecipe.title,
        summary: filteredRecipe.summary,
        ingredients: filteredRecipe.extendedIngredients.map(({amount, unit, name}) => (
            [amount, unit, name].join([])    
        )).toString(),
        servings: filteredRecipe.servings, 
        time: filteredRecipe.readyInMinutes,
        instructions: filteredRecipe.instructions
    }))
    
    const onTrigger = (e) => {
        props.handleCallback(recipe);
        e.preventDefault();
    }

    return ( 
        <div className="recipe-details" key={id}>
           {props.recipes.filter(recipe => recipe.id === parseInt(id)).map(filteredRecipe => (
            <article>
                <button className="favebutton" onClick={onTrigger}>Add To Favorites</button>
               <br/>
               <h2> {filteredRecipe.title} </h2>
               <br/>
               <h4>This recipe makes a total of {filteredRecipe.servings} servings.</h4>
               <br/>
               <p>{filteredRecipe.summary !== null ? parse(filteredRecipe.summary) : filteredRecipe.summary}</p>
               <br/>
               <p> {filteredRecipe.instructions !== null ? parse(filteredRecipe.instructions) : filteredRecipe.instructions} </p>
               <br/>
               <div className="ingredients">
                   {filteredRecipe.extendedIngredients.map(({amount, unit, name}) => (
                       <li>{amount}{unit} of {name}</li>
                   ))}
               </div>
               <br/>
            
           </article>
           ))}
        </div>
     );
}
 
export default Recipe;
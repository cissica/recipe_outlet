import { useParams } from "react-router-dom"

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
               <h2> {filteredRecipe.title} </h2> 
               <br/>
               <h4>This recipe makes a total of {filteredRecipe.servings} servings.</h4>
               <br/>
                <p>{filteredRecipe.summary}</p>
               <br/>
               <p> {filteredRecipe.instructions} </p>
               <div>
                   {filteredRecipe.extendedIngredients.map(({amount, unit, name}) => (
                       <li>{amount}{unit} of {name}</li>
                   ))}
               </div>
               <button onClick={onTrigger}>Add To Favorites</button>
           </article>
           ))}
        </div>
     );
}
 
export default Recipe;
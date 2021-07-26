import { useParams } from "react-router-dom"

const Recipe = (props) => {
    const { id } = useParams();
    console.log(props)

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
           </article>
           ))}
        </div>
     );
}
 
export default Recipe;
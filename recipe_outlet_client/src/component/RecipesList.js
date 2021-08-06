import { Link } from "react-router-dom";


const RecipesList = (props) => {
    const recipes = props.recipes
    const requesting = props.requesting
   
   
    return ( 
        <div className="recipes-list">
            {requesting && <div> Loading... </div>}
            {recipes && recipes.map(({title, id, servings, readyInMinutes, image}) => (
                <div className="recipe-preview" key={id}>
                    <Link to={`/recipes/${id}`}>
                    <img className="image" src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>Servings: {servings}</p>
                    <p>Time to make: {readyInMinutes} Minutes</p>   
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default RecipesList;

import parse from 'html-react-parser';
const Faves = ({faves}) => {
    
    return ( 
        <div>
            {faves && faves.map(({title, id, servings, time, ingredients, instructions}) => (
                <div className="recipe-preview" key={id}>
                    <h2>{title}</h2>
                    <p>Servings: {servings}</p>
                    <p>Time to make: {time} Minutes</p>
                    <ul>Ingredients: {ingredients.split(",").map((singlestr) => (
                            <li key={id}>{singlestr}</li>
                    ))} 
                    </ul>
                    <p>Instructions: {instructions !== null ? parse(instructions) : instructions}</p> 
                </div>
            ))}
            {!faves && <h1>Looks like you don't have any favorites yet.</h1>}
        </div>
     );
}
 
export default Faves;
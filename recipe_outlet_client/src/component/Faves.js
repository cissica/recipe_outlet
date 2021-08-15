
import parse from 'html-react-parser';
const Faves = ({faves}) => {
    
    return ( 
        <div>
            {faves.map(({title, id, servings, time, ingredients, instructions}) => (
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
        </div>
     );
}
 
export default Faves;
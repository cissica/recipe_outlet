const Faves = ({faves}) => {
    
    return ( 
        <div>
            {faves.map(({title, id, servings, time, image, ingredients}) => (
                <div className="recipe-preview" key={id}>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>Servings: {servings}</p>
                    <p>Time to make: {time} Minutes</p>
                    <p>Ingredients: {ingredients.split(", ")}</p>    
                </div>
            ))}
        </div>
     );
}
 
export default Faves;
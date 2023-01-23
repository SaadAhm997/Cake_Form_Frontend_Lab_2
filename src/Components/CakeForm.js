import { useState } from 'react';



const CakeForm = ({addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating,setRating] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    const newCake = {
        cakeName: cakeName,
        ingredients:ingredients,
        rating:rating
}
addNewCake(newCake);
setCakeName("")
setIngredients("")
setRating("")
}

return (
        <div>
            <h2>Add Cake</h2>
    
        <form onSubmit={(handleSubmit)}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" 
                   id="name"
                   placeholder="Cake Name"
                   onChange={(event) => setCakeName(event.target.value)}
                   value = {cakeName}/>


            <label htmlFor="ingredients">Ingredients:</label>
            <input type="text" 
                   id="ingredients"
                   placeholder="Ingredients"
                   onChange={(event) => setIngredients(event.target.value)}
                   value = {ingredients}/>


            <label htmlFor="rating">Rating:</label>
            <input type="number" 
                   id="rating" min={1} max={5}
                   placeholder="Rating"
                   onChange={(event) => setRating(event.target.value)}
                   value = {rating}/>

            <input type="submit" value = "OK"/>
        </form>
        </div>
    )
};


export default CakeForm;
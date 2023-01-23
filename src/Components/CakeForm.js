import { useState } from 'react';

const CakeForm = () => {





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
                   value = {cakeName}/>
            <textarea cols="30" rows="1" id="ingredients"></textarea>


            <label htmlFor="rating">Rating:</label>
            <input type="number" 
                   id="rating" min={1} max={5}
                   placeholder="Rating"
                   onChange={(event) => setRating(event.target.value)}
                   value = {cakeName}/>

            <input type="submit" value = "OK"/>
        </form>
        </div>
    )

}

export default CakeForm;
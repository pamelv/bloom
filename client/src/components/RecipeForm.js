import React from 'react';


export default function randomRecipe() {
    const {recipes} = useState();
    const onSubmit


    {recipes.map(recipe => (
        <Recipe 
            key={recipe.recipes.id}
            title={recipe.recipes.title}
            image={recipe.recipes.image}
            readyInMinutes={recipe.recipes.readyInMinutes}
            servings={recipe.recipes.servings}
            summary={recipe.recipes.summary}
        />
    )}

    render(){
        return (  
        <div className='recipe'>
            <h1>{title}</h1>
            <img src={image} alt='' />
            <ul>
                <li>{readyInMinutes}</li>
                <li>{servings}</li>
            </ul>
            <p>{summary}</p>
       
            <button type='submit'><a href='/saved'>BOOKMARK</a></button>
        </div>
        )
    }
}



export default RecipeForm;
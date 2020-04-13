import React from "react";
import Parser from 'html-react-parser';

export default function RecipeForm(props) {
  return (
    <div>
      <h1>RECIPES FOR YOU</h1>
      {props.recipes.map((recipe) => {
        return (
          <div className="card recipe">
          <div className="card-body">
          <div key={recipe.id}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt="" />
            <ul>
              <li>PREP TIME: {recipe.readyInMinutes}</li>
              <li>SERVINGS:{recipe.servings}</li>
            </ul>
            
            <>{ Parser( recipe.summary ) }</>
            
            <h6>INGREDIENTS</h6>
            <> {recipe.extendedIngredients.map((ingredient) => {
              return (
                <li>{ingredient.originalString}</li>
              )
            })}
            </>

            <h4>RECIPE INSTRUCTIONS</h4>
            <>{ Parser( recipe.instructions ) }</>
            

            <button type="submit" className="text-center" onClick={() => {
                props.handleFormSave(recipe);
              }}>
                BOOKMARK
            </button>
          </div>
        </div>
  </div>   
        );
      })}
</div>
  );
}


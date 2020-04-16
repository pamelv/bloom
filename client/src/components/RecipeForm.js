import React from "react";
import Parser from 'html-react-parser';

export default function RecipeForm(props) {
  return (
    <div>
      {props.recipes.map((recipe) => {
        return (
          <div className="card recipe card poem text-center shadow-lg p-3 mb-5 bg-white rounded-lg">
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
            

            <button type="submit" className="m-auto" onClick={() => {
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


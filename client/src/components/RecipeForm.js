import React from "react";
// props={
//     recipes1 : this.StaticRange.recipes
//    handleFormsave: this.handleFormSave
// }
export default function RecipeForm(props) {
  return (
    <div className="recipe">
      {props.recipes1.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="" />
            <ul>
              <li>PREP TIME: {recipe.readyInMinutes}</li>
              <li>SERVINGS:{recipe.servings}</li>
            </ul>
            <h4>RECIPE INSTRUCTIONS</h4>
            <p>{recipe.instructions}</p>

            <button
              type="submit"
              onClick={() => {
                props.handleFormSave(recipe);
              }}
            >
              BOOKMARK
            </button>
          </div>
        );
      })}
    </div>
  );
}

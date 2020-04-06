import React, { Component } from "react";
// import RecipeForm from './RecipeForm';
import API from "../utils/recipe.api";

export default class Recipe extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    console.log("mounted");
    API.getRecipe()
      .then(response => {
        console.log(response.data.recipes);
        this.setState({
          recipes: response.data.recipes
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="recipe">
        {this.state.recipes.map(recipe => {
          return (
            <div>
              <h1>{recipe.title}</h1>
              <img src={recipe.image} alt="" />
              <ul>
                <li>{recipe.readyInMinutes}</li>
                <li>{recipe.servings}</li>
              </ul>
              <p>{recipe.summary}</p>

              <button type="submit">
                <a href="/saved">BOOKMARK</a>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

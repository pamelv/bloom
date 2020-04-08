import React, { Component } from "react";
import API from "../utils/quote.api";

export default class Poem extends Component {
  state = {
    quote: []
  };

  componentDidMount() {
    console.log("mounted");
    API.getQuote()
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
            <div key={recipe.id}>
              <h1>{recipe.title}</h1>
              <img src={recipe.image} alt="" />
              <ul>
                <li>PREP TIME: {recipe.readyInMinutes}</li>
                <li>SERVINGS:{recipe.servings}</li>
              </ul>
              <h4>RECIPE INSTRUCTIONS</h4>
              <p>{recipe.instructions}</p>

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
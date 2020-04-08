import React, { Component } from "react";
import API from "../utils/recipe.api";
import RecipeForm from "../components/RecipeForm";
export default class Recipe extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    console.log("mounted");
    API.getRecipe()
      .then(response => {
        console.log("recipe:",response.data.recipes);
        this.setState({
          recipes: response.data.recipes
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
   
  handleFormSave = (recipe)=> {
    API.saveRecipe(recipe).then(
      response => {
        console.log("success!");
      }
    )
  }

  render() {
    return (
      <RecipeForm recipes1 ={this.state.recipes} handleFormSave = {this.handleFormSave} />
    );
  }
}
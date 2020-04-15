import React, { Component } from "react";
import API from "../utils/recipe.api";
import RecipeForm from "../components/RecipeForm";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      recipes: [],
    };
  }

  componentDidMount() {
    if (this.state.currentMood === "Happy") {
      API.getRecipeHappy()
        .then((response) => {
          console.log("recipe:", response.data.recipes);
          this.setState({
            recipes: response.data.recipes,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Bleh") {
      API.getRecipeBleh()
        .then((response) => {
          console.log("recipe:", response.data.recipes);
          this.setState({
            recipes: response.data.recipes,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Sad") {
      API.getRecipeSad()
        .then((response) => {
          console.log("recipe:", response.data.recipes);
          this.setState({
            recipes: response.data.recipes,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("no mood available");
  }

  handleFormSave = (recipe) => {
    API.saveRecipe(recipe).then((response) => {
      console.log("success!");
    });
  };

  render() {
    return (
      <RecipeForm
        recipes1={this.state.recipes}
        handleFormSave={this.handleFormSave}
      />
    );
  }
}

import React, { Component } from "react";
import API from "../utils/recipe.api";
import RecipeForm from "../components/RecipeForm";
import history from "../history";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      currentMood: localStorage.getItem("current_mood"),
      recipes: [],
    };
  }

  componentDidMount() {
    this.loggedIn();

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
    API.saveRecipe(this.state.id, recipe).then((response) => {
      console.log(recipe);
      console.log("success!");
    });
  };

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
      history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h5 className="text-center my-5">
            DAILY RECIPES CURATED JUST FOR YOU
          </h5>
          <RecipeForm
            recipes={this.state.recipes}
            handleFormSave={this.handleFormSave}
          />
        </div>
      </div>
    );
  }
}

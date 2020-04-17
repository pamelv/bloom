import React, { Component } from "react";
import API from "../utils/recipe.api";
// import RecipeForm from "../components/RecipeForm";
import RecipeCard from "../components/RecipeCollapse";
import history from "../history";
import Navbar from "../components/Navbar";
import Parser from "html-react-parser";
import CategoryNavigation from "../components/CategoryNavigation";

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
    API.saveRecipe(recipe).then((response) => {
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
      <div
        style={{
          margin: "0px",
          padding: "0px",
          width: "100vw",
          position: "relative",
          background:
            "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <Navbar title="Recipe" />
          <div
            style={{
              columnCount: "1",
              columnGap: "1em",
              padding: "0.7em",
              height: "100%",
              marginBottom: "60px",
            }}
          >
            {this.state.recipes.map((recipe) => (
              <div className="s12" value="mood" key={recipe.title}>
                <RecipeCard
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  readyInMinutes={recipe.readyInMinutes}
                  servings={recipe.servings}
                  summary={Parser(recipe.summary)}
                  extendedIngredients={recipe.extendedIngredients}
                  instruction={Parser(recipe.instructions)}
                />
              </div>
            ))}
          </div>
          <CategoryNavigation currentPage="recipe" />
        </div>
      </div>
    );
  }
}

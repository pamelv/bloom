import React, { Component } from "react";
import API from "../utils/recipe.api";
// import RecipeForm from "../components/RecipeForm";
import RecipeCard from "../components/RecipeCollapse";
import history from "../history";
import Navbar from "../components/Navbar";
import Parser from "html-react-parser";
import CategoryNavigation from "../components/CategoryNavigation";
import Loader from "react-loader-spinner";
import toaster from "toasted-notes";
// import 'toasted-notes/src/styles.css'; // optional styles
import "./toaster.css";

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
    this.showResults();
    this.loggedIn();

    if (this.state.currentMood === "Happy") {
      API.getRecipeHappy()
        .then((response) => {
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
    console.log(recipe);
    API.saveRecipe(recipe, this.state.token).then((response) => {});
  };

  showResults() {
    setTimeout(
      function () {
        this.setState({ showResults: true });
      }.bind(this),
      3000
    );
  }

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
      history.push("/login");
    }
  }

  render() {
    const showResults = this.state.showResults;
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
          <Navbar title="Cooking" currentMood={this.state.currentMood} />
          <div
            style={{
              columnCount: "1",
              columnGap: "1em",
              padding: "0.7em",
              height: "100%",
              paddingBottom: "55px",
              paddingTop: "65px",
            }}
          >
            <div
              className={showResults ? "hide" : "show"}
              style={{
                top: "50%",
                position: "fixed",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Loader
                type="Circles"
                color="#FFB383"
                height={80}
                width={80}
                timeout={3000} //3 secs
              />
            </div>
            <div id="results" className={showResults ? "show" : "hide"}>
              {this.state.recipes.map((recipe) => (
                <div className="s12" value="mood">
                  <RecipeCard
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    readyInMinutes={recipe.readyInMinutes}
                    servings={recipe.servings}
                    summary={Parser(recipe.summary)}
                    extendedIngredients={recipe.extendedIngredients}
                    instruction={Parser(recipe.instructions)}
                    onClick={() => {
                      this.handleFormSave(recipe);
                      toaster.notify("Bookmark saved!", {
                        position: "bottom",
                        duration: 2000,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <CategoryNavigation currentPage="recipe" />
        </div>
      </div>
    );
  }
}

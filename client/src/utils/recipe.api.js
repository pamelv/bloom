import axios from "axios";

export default {
  getRecipe: function () {
    return axios.get("/api/recipe");
  },

  getRecipeHappy: function() {
    return axios.get("/api/recipe/happy");
  },

  getRecipeSad: function() {
    return axios.get("/api/recipe/sad");
  },
  
  getRecipeBleh: function() {
    return axios.get("/api/recipe/bleh");
  },

  saveRecipe:function(recipe){
    return axios.post("/api/recipe", recipe)
  }
};

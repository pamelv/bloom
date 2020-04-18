import axios from "axios";

export default {
  getRecipeHappy: function () {
    return axios.get("/api/recipe/happy");
  },

  getRecipeSad: function () {
    return axios.get("/api/recipe/sad");
  },

  getRecipeBleh: function () {
    return axios.get("/api/recipe/bleh");
  },

  saveRecipe: function (recipe, token) {
    return axios.post(`/api/recipe`, recipe, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedRecipe: function (token) {
    return axios.get(`/api/recipe`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

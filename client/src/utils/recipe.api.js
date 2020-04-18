import axios from "axios";

export default {
  getRecipe: function () {
    return axios.get("/api/recipe");
  },

  getRecipeHappy: function () {
    return axios.get("/api/recipe/happy");
  },

  getRecipeSad: function () {
    return axios.get("/api/recipe/sad");
  },

  getRecipeBleh: function () {
    return axios.get("/api/recipe/bleh");
  },

  saveRecipe: function (id, recipe, token) {
    return axios.post(`/api/user/${id}/recipes`, recipe, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedRecipe: function (id, token) {
    return axios.get(`/api/user/${id}/recipes`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

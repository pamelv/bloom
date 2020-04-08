import axios from "axios";

export default {
  getRecipe: function() {
    return axios.get("/api/recipe");
  },
  
  saveRecipe:function(recipe){
    return axios.post("/api/recipe",recipe)
  }
};

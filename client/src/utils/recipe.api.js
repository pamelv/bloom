import axios from "axios";

export default {
  getRecipe: function() {
    return axios.get("http://localhost:3001/api/recipe");
  }
};

const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  readyInMinutes: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;

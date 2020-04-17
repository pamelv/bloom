const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;

// to save to our database
const Recipe = require("../../models/recipes.models");
const User = require("../../models/users.models");

// =================5 RANDOM RECIPES=====================
router.get("/recipe", (req, res) => {
  // console.log("hello", apiKey);

  axios
    .get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
    .then((response) => {
      res.json(response.data);
    });
});

// ===================5 HAPPY RECIPES=====================

router.get("/recipe/happy", (req, res) => {
  // console.log("hello", apiKey);

  axios
    .get(
      `https://api.spoonacular.com/recipes/random?number=5&tags=salad&apiKey=${apiKey}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

// =============5 SAD/ANGRY RECIPES===================

router.get("/recipe/sad", (req, res) => {
  // console.log("hello", apiKey);

  axios
    .get(
      `https://api.spoonacular.com/recipes/random?number=5&tags=dinner&apiKey=${apiKey}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

// =================5 BLEH RECIPES=====================

router.get("/recipe/bleh", (req, res) => {
  // console.log("hello", apiKey);

  axios
    .get(
      `https://api.spoonacular.com/recipes/random?number=5&tags=fingerfood&apiKey=${apiKey}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

// ================SAVE TO DATABASE================================
router.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post("/user/:id/recipes", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    const results = await User.findByIdAndUpdate(req.params.id, {
      $push: { recipes: { $each: [recipe._id], $position: 0 } },
    });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/user/:id/recipes", async (req, res) => {
  const user = await User.findById(req.params.id).populate("recipes");
  res.json(user.recipes);
});

module.exports = router;

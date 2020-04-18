const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
const jwt = require("jsonwebtoken");

// to save to our database
const Recipe = require("../../models/recipes.models");
const User = require("../../models/users.models");

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

router.post("/recipe", authenticateToken, async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    const results = await User.findByIdAndUpdate(
      { _id: req.userId.user },
      {
        $push: { recipes: { $each: [recipe._id], $position: 0 } },
      }
    );
    res.send(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/recipe", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user }).populate(
    "recipes"
  );
  res.json(user.recipes);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userId) => {
    if (err) return res.sendStatus(403);
    req.userId = userId;
    next();
  });
}

module.exports = router;

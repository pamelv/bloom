const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
<<<<<<< HEAD


=======
>>>>>>> master
// to save to our database
const recipe = require("../../models/recipes.models");
const user = require("../../models/users.models");

<<<<<<< HEAD

// =================5 RANDOM RECIPES=====================
router.get("/recipe", (req, res) => {
  // console.log("hello", apiKey);

  axios
    .get(
     `https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`
    )
    .then((response) => {
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
      res.json(response.data);
    });
});

// ================SAVE TO DATABASE================================

router.post("/recipe", (req, res) => {
  const newRecipe = req.body;
  console.log(newRecipe);
  recipe.create(newRecipe)
//   .then((response) => {
//     res.json(response);
//   });
  .then(function(recipe){
    return user.findOneAndUpdate({}, { $push:{ recipes: recipe._id } }, { new: true });
  })
  .then(function(dbUser){
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  });
});
module.exports = router;



=======
// =================5 RANDOM RECIPES=====================
router.get("/recipe", (req, res) => {
  // console.log("hello", apiKey);
  axios
    .get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
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
    })
    .catch((error) => console.log(error));
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
    })
    .catch((error) => console.log(error));
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
    })
    .catch((error) => console.log(error));
});
// ================================================
router.post("/recipe", (req, res) => {
  const newRecipe = req.body;
  console.log(newRecipe);
  recipe
    .create(newRecipe)
    //   .then((response) => {
    //     res.json(response);
    //   });
    .then(function (recipe) {
      return user.findOneAndUpdate(
        {},
        { $push: { recipes: recipe._id } },
        { new: true }
      );
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});
module.exports = router;
>>>>>>> master

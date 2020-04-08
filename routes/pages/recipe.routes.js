const router = require("express").Router();
const axios = require('axios');
const recipe = require('../../models/recipes.models')
router.get('/recipe', (req, res) => {
    console.log('hello');
    axios.get('https://api.spoonacular.com/recipes/random?number=1&apiKey=fdf9083cd9394e03bd0600d6440be4b7')
    .then(response => {
        console.log(response.data);
        res.json(response.data)
    })
})

router.post('/recipe', (req, res) => {
    const newRecipe = req.body;
    console.log(newRecipe);
   recipe.create(newRecipe).then(response =>{
       res.json(response);
   })
})
module.exports = router;


    // ===================TO GENERATE THREE RANDOM RECIPES==================
    // router.get('/recipe', (req, res) => {
    //     console.log('hello');
    //     axios.get('https://api.spoonacular.com/recipes/random?number=3&apiKey=fdf9083cd9394e03bd0600d6440be4b7')
    //     .then(response => {
    //         console.log(response.data);
    //         res.json(response.data);
    //     })
    // })


// =====================GET BACK ALL RECIPES======================
// router.get("/recipe", async (req, res) => {
//     try{
//         const recipes = await Recipe.find();
//         res.json.apply(recipes);
//     }
//     catch(err) {
//         res.json({ message:err })
//     }
// });


// // ===============GET BACK A SPECIFIC RECIPE======================
// router.get("/:recipeId", async (req, res) => {
//     try{
//         const recipe = await Recipe.findById(req.params.recipeId);
//         res.json(recipe);
//     }
//     catch(err) {
//         res.json({ message:err });
//     }
// });


// // =====================DELETE A RECIPE=============================
// router.delete("/:recipeId", async(req, res) => {
//     try{
//         const removedRecipe = await Recipe.deleteOne({_id: req.params.recipeId});
//         res.json(removedRecipe);
//     }
//     catch(err) {
//         res.json({ message:err });
//     }
// });


// // ==============SAVE RECIPE TO MONGODB===========================
// router.post("/",async (req, res) => {
//     const recipe = new Recipe ({
//         title: req.body.title,
//         image: req.body.image,
//         readyInMinutes: req.body.readyInMinutes,
//         servings: req.body.servings,
//         instructions: req.body.instructions
//     });

//     try{
//         const savedRecipe = await recipe.save()
//             res.json(savedRecipe);
//     }
//     catch(err){
//         res.json({ message:err });
//     }
// });

// module.exports = router;
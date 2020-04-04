const router = require("express").Router();
const axios = require('axios');

router.get('/recipe', (req, res) => {
    console.log('hello');
    axios.get('https://api.spoonacular.com/recipes/random?number=1&apiKey=fdf9083cd9394e03bd0600d6440be4b7')
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
})
module.exports = router;
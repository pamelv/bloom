const router = require("express").Router();
const axios = require('axios');

router.get('/quote', (req, res) => {
    console.log('hello');
    axios.get('https://favqs.com/api/qotd')
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
})

module.exports = router;
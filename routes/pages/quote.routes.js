const router = require("express").Router();
const axios = require("axios");
// const quote = require("../../models");

router.get("/quote", (req, res) => {
    console.log("hello");
    axios.get(
        "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
        )
        .then(response => {
            console.log(response.data);
            res.json(response.data);
        })
    })

    router.post("/quote", (req,res) => {
        const newQuote = req.body;
        console.log(newQuote);
        quote.create(newQuote).then(response => {
            res.json(response);
        })
    })

module.exports = router;
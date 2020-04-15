const router = require("express").Router();
const axios = require("axios");
// const quote = require("../../models");

router.get("/quote", (req, res) => {
  axios
    .get(
      "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    )
    .then((response) => {
      res.json(response.data);
    });
});

router.post("/quote", (req, res) => {
  const newQuote = req.body;
  console.log(newQuote);
  quote.create(newQuote).then((response) => {
    res.json(response);
  });
});

module.exports = router;

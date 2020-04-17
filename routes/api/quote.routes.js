const router = require("express").Router();
const axios = require("axios");

router.get("/quote", (req, res) => {
  console.log("hello");
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
  quote.create(newQuote).then((response) => {
    res.json(response);
  });
});

module.exports = router;

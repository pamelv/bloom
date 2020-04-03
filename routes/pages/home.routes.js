const router = require("express").Router();

// define the home page route
router.get("/", function(req, res) {
  res.send("WELCOME TO BLOOM");
});

module.exports = router;

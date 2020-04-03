const router = require("express").Router();

// define the home page route
router.get("/", function(req, res) {
  res.send("USER PROFILE GOES HERE");
});

module.exports = router;

const router = require("express").Router();

// define the home page route
router.get("/", function(req, res) {
  res.send("LOGIN HERE");
});

module.exports = router;

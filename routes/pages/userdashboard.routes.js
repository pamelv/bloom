const router = require("express").Router();

router.get("/", function(req, res) {
  res.send("USER DASHBOARD GOES HERE");
});

module.exports = router;

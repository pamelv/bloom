const router = require("express").Router();

// define the home page route
router.get("/", function(req, res) {
  res.send(
    '<h1>SELECT YOUR MOOD</h1><br><button><a href="/mood/happy">Happy</a></button><button><a href="/mood/blah">BLAHH</a></button><button><a href="/mood/sad">Sad</a></button>'
  );
});

router.get("/happy", function(req, res) {
  res.send("USER IS HAPPY");
});

router.get("/sad", function(req, res) {
  res.send("USER IS SAD");
});

router.get("/blah", function(req, res) {
  res.send("USER IS BLAHH");
});

module.exports = router;

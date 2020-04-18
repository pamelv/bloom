const router = require("express").Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");

// to save to our database
const Poem = require("../../models/poems.models");
const User = require("../../models/users.models");

router.get("/poem/:title", (req, res) => {
  // console.log('hello');
  const title = req.params.title;
  axios
    .get(`http://poetrydb.org/title/${title}/title,author,lines.json`)
    .then((response) => {
      // ==================to generate four random poems====================
      const newArr = [];
      for (let i = 0; i < 4; i++) {
        const outerIndex = Math.floor(Math.random() * response.data.length);
        newArr.push(response.data[outerIndex]);
      }
      res.json(newArr);
    });
});

// ================SAVE TO DATABASE====================================

router.get("/poems", async (req, res) => {
  const poems = await Poem.find();
  res.json(poems);
});

router.post("/poem", authenticateToken, async (req, res) => {
  try {
    const poem = await Poem.create(req.body);
    const results = await User.findByIdAndUpdate(
      { _id: req.userId.user },
      {
        $push: { poems: { $each: [poem._id], $position: 0 } },
      },
      { new: true }
    );
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/poem", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user }).populate("poems");
  res.json(user.poems);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userId) => {
    if (err) return res.sendStatus(403);
    req.userId = userId;
    next();
  });
}

module.exports = router;

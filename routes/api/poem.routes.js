const router = require("express").Router();
const axios = require("axios");

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

router.post("/user/:id/poems", async (req, res) => {
  try {
    const poem = await Poem.create(req.body);
    const results = await User.findByIdAndUpdate(
      req.params.id,
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

router.get("/user/:id/poems", async (req, res) => {
  const user = await User.findById(req.params.id).populate("poems");
  res.json(user.poems);
});

module.exports = router;

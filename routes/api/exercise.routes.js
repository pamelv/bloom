const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const api_key = process.env.WGER_API_KEY;

// to save to our database
const Exercise = require("../../models/exercises.models");
const User = require("../../models/users.models");

// ================5 EXERCISES=====================
router.get("/exercise", (req, res) => {
  console.log("hello");

  axios
    .get(
      `https://wger.de/api/v2/exerciseinfo/?limit=7&language=2&status=2&api_key=${api_key}`
    )
    .then((response) => {
      res.json(response.data);
    });
});

// ===============SAVE TO DATABASE===================
router.get("/exercises", async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

router.post("/user/:id/exercises", async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    const results = await User.findByIdAndUpdate(req.params.id, {
      $push: { exercises: { $each: [exercise._id], $position: 0 } },
    });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/user/:id/exercises", async (req, res) => {
  const user = await User.findById(req.params.id).populate("exercises");
  res.json(user.exercises);
});

module.exports = router;

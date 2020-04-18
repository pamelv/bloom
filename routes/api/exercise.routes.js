const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const api_key = process.env.WGER_API_KEY;
const jwt = require("jsonwebtoken");

// to save to our database
const Exercise = require("../../models/exercises.models");
const User = require("../../models/users.models");

// ================5 EXERCISES=====================
router.get("/exercisedata", (req, res) => {
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

router.post("/exercise", authenticateToken, async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    const results = await User.findByIdAndUpdate(
      { _id: req.userId.user },
      {
        $push: { exercises: { $each: [exercise._id], $position: 0 } },
      }
    );
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/exercise", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user }).populate(
    "exercises"
  );
  res.json(user.exercises);
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

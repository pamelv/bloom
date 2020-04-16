const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const api_key = process.env.WGER_API_KEY;

// to save to our database
const exercise = require("../../models/exercises.models");
const user = require("../../models/users.models");

// ================5 EXERCISES=====================
router.get("/exercise", (req, res) => {
    console.log("hello");

    axios
        .get(`https://wger.de/api/v2/exerciseinfo/?limit=7&language=2&status=2&api_key=${api_key}`)
        .then((response) => {
            console.log(response.data);
            res.json(response.data);
        });
});


// ===============SAVE TO DATABASE===================
router.post("/exercise", (req,res) => {
    const newExercise = req.body;
    console.log(newExercise);
    exercise
        .create(newExercise)
        .then(function(exercise) {
            return user.findOneAndUpdate(
                {},
                { $push: { exercises: exercise._id } },
            );
        })
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(function(err) {
            res.json(err);
        });
});

module.exports = router;
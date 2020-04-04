const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const pages = require("./routes/pages");
const mongoose = require("mongoose");
const Users = require("./models/users.models");
const CheckIn = require("./models/checkin.models");

/* constants */
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/bloom", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

/* set-up middlewares */
app.use(morgan("dev")); // logging
app.use(express.json());
app.use("/", pages);

app.get("/api/ping", (req, res) => res.send("pong"));

app
  .route("/api/users")
  .get(async (req, res) => {
    const users = await Users.find();
    res.json(users);
  })
  .post(async (req, res) => {
    const result = await Users.create(req.body);
    res.json(result);
  });

app
  .route("/api/users/:id/moods")
  .get(async (req, res) => {
    const user = await Users.findById(req.params.id).populate("moods");
    res.json(user.moods);
  })
  .post(async (req, res) => {
    try {
      const mood = await CheckIn.create(req.body);
      const results = await Users.findByIdAndUpdate(req.params.id, {
        $push: { moods: mood._id }
      });
      res.json(results);
    } catch (err) {
      res.json(err);
    }
  });

app
  .route("/api/moods")
  .get(async (req, res) => {
    const moods = await CheckIn.find();
    res.json(moods);
  })
  .post(async (req, res) => {
    const result = await CheckIn.create(req.body);
    res.json(result);
  });

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
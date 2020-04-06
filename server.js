const express = require("express");
const morgan = require("morgan");
const pages = require("./routes/pages");
const mongoose = require("mongoose");
const Users = require("./models/users.models");
const CheckIn = require("./models/checkin.models");
const cors = require("cors");
const Bcrypt = require("bcryptjs");

/* constants */
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: true,
  credentials: true
};

mongoose.connect("mongodb://localhost/bloom", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

/* set-up middlewares */
app.use(morgan("dev")); // logging
app.use(express.json());
app.use("/", pages);
app.options("*", cors(corsOptions));

//remove once app is ready
app.get("/api/ping", (req, res) => res.send("pong"));

app
  .route("/api/users")
  .get(async (req, res) => {
    const users = await Users.find();
    res.json(users);
  })
  .post(async (req, res) => {
    try {
      req.body.password = Bcrypt.hashSync(req.body.password, 10);
      var user = new Users(req.body);
      var result = await user.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.route("/api/users/:email").get(async (req, res) => {
  const user = await Users.findOne({ email: req.params.email });
  res.json(user);
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

app.route("/api/moods").get(async (req, res) => {
  const moods = await CheckIn.find();
  res.json(moods);
});

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});

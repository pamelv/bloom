require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const pages = require("./routes/pages");
const mongoose = require("mongoose");
const Users = require("./models/users.models");
const Moods = require("./models/moods.models");
const cors = require("cors");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* constants */
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: true,
  credentials: true,
};

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://bloom:${process.env.DB_PASSWORD}@ds263248.mlab.com:63248/heroku_m4bk3m41`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

/* set-up middlewares */
app.use(morgan("dev")); // logging

app.use("/", pages);
app.get("*", (req, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);
app.options("*", cors(corsOptions));

app.route("/users").get(async (req, res) => {
  const user = await Users.find();
  res.json(user);
});

app.route("/api/login").post(async (req, res) => {
  const user = await Users.findOne({
    email: req.body.email,
  });
  if (Bcrypt.compareSync(req.body.password, user.password)) {
    const userId = { user: user._id };
    const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1hr",
    });
    res.json({ accessToken: accessToken });
  } else res.send(401);
});

app
  .route("/api/users")
  .get(authenticateToken, async (req, res) => {
    const user = await Users.findById({ _id: req.userId.user });
    res.json(user);
  })
  .post(async (req, res) => {
    try {
      req.body.password = Bcrypt.hashSync(req.body.password, 10);
      var user = new Users(req.body);
      var result = await user.save();
      const userId = { user: user._id };
      const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.json({ accessToken: accessToken });
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.route("/api/users/:email").get(async (req, res) => {
  const user = await Users.findOne({ email: req.params.email });
  res.json(user);
});

app
  .route("/api/user/:id")
  .get(async (req, res) => {
    const user = await Users.findById(req.body.id);
    res.json(user);
  })
  .put(async (req, res) => {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    const results = await Users.updateOne(
      { _id: req.params.id },
      { $set: { password: req.body.password } },
      { new: true },
      (err, res) => {
        if (err) console.log(err);
      }
    );
    res.json(results);
  });

app
  .route("/api/user/:id/moods")
  .get(async (req, res) => {
    const user = await Users.findById(req.params.id).populate("moods");
    res.json(user.moods);
  })
  .post(async (req, res) => {
    try {
      const mood = await Moods.create(req.body);
      const results = await Users.findByIdAndUpdate(req.params.id, {
        $push: { moods: { $each: [mood._id], $position: 0 } },
      });
      res.json(results);
    } catch (err) {
      res.json(err);
    }
  });

app.route("/api/moods").get(async (req, res) => {
  const moods = await Moods.find();
  res.json(moods);
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

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});

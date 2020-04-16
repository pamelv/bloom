const router = require("express").Router();
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../../models/users.models");
const Moods = require("../../models/moods.models");

//get all users
router.get("/users", async (req, res) => {
  const user = await Users.find();
  res.json(user);
});

router.post("/login", async (req, res) => {
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

router.get("/user", authenticateToken, async (req, res) => {
  const user = await Users.findById({ _id: req.userId.user });
  res.json(user);
});

router.post("/user", async (req, res) => {
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

//for forgot password
router.get("/users/:email", async (req, res) => {
  const user = await Users.findOne({ email: req.params.email });
  res.json(user);
});
//find active user
router.get("/user/:id", async (req, res) => {
  const user = await Users.findById(req.body.id);
  res.json(user);
});

//for forgot password
router.put("/user/:id", async (req, res) => {
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

//get moods to uses schema
router.get("/user/:id/moods", async (req, res) => {
  const user = await Users.findById(req.params.id).populate("moods");
  res.json(user.moods);
});

//post new mood to uses schema
router.post("/user/:id/moods", async (req, res) => {
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

router.get("/moods", async (req, res) => {
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

module.exports = router;

const router = require("express").Router();
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/users.models");
const Moods = require("../../models/moods.models");

//get all users
router.get("/users", async (req, res) => {
  const user = await User.find();
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user != null) {
    if (Bcrypt.compareSync(req.body.password, user.password)) {
      const userId = { user: user._id };
      const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr",
      });
      res.json({ accessToken: accessToken });
    } else res.sendStatus(401);
  } else res.sendStatus(404);
});

router.get("/user", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user });
  res.json(user);
});

router.post("/user", async (req, res) => {
  try {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    var user = new User(req.body);
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
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//find active user
// router.get("/user/:id", async (req, res) => {
//   const user = await User.findById(req.body.id);
//   res.json(user);
// });

//for forgot password
router.put("/user/:id", async (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const results = await User.updateOne(
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
router.get("/user/:id/moods", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user }).populate("moods");
  res.json(user.moods);
});

//post new mood to uses schema
router.post("/user/:id/moods", authenticateToken, async (req, res) => {
  try {
    console.log(req.userId.user);
    const mood = await Moods.create(req.body);
    const results = await User.findByIdAndUpdate(
      { _id: req.userId.user },
      {
        $push: { moods: { $each: [mood._id], $position: 0 } },
      }
    );
    res.send(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/moods", async (req, res) => {
  const moods = await Moods.find();
  res.json(moods);
});

router.delete("/moods", authenticateToken, async (req, res) => {
  var id = req.body.id;
  console.log(id);
  const results = await Moods.findByIdAndDelete(id);
  res.send(results);
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

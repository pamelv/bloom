const router = require("express").Router();
var Spotify = require("node-spotify-api");
const Playlist = require("../../models/playlists.models");
const User = require("../../models/users.models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});

router.get("/playlists/happy", (req, res) => {
  console.log("hello");
  spotify
    .request(
      "https://api.spotify.com/v1/search?q=%22mood%20happy%22&type=playlist&limit=10"
    )
    .then(function (data) {
      res.json(data.playlists.items);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});
router.get("/playlists/bleh", (req, res) => {
  console.log("hello");
  spotify
    .request(
      "https://api.spotify.com/v1/search?q=%22calm%22&type=playlist&limit=10"
    )
    .then(function (data) {
      res.json(data.playlists.items);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});
router.get("/playlists/sad", (req, res) => {
  spotify
    .request(
      "https://api.spotify.com/v1/search?q=%22Sad%22&type=playlist&limit=10"
    )
    .then(function (data) {
      res.json(data.playlists.items);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});
router.get("/playlists/:subMood", (req, res) => {
  var paramSearch = req.params.subMood;
  var subMoodSearch = paramSearch.split("-").join("%20");
  spotify
    .request(
      `https://api.spotify.com/v1/search?q=%22${subMoodSearch}%22&type=playlist&limit=10`
    )
    .then(function (data) {
      res.json(data.playlists.items);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});

// ==========to save to our db=====================
router.get("/playlists", async (req, res) => {
  const playlists = await Playlist.find();
  res.json(playlists);
});

router.post("/playlist", authenticateToken, async (req, res) => {
  try {
    const playlist = await Playlist.create(req.body);
    const results = await User.findByIdAndUpdate(
      { _id: req.userId.user },
      {
        $push: { playlists: { $each: [playlist._id], $position: 0 } },
      },
      { new: true }
    );
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/playlist", authenticateToken, async (req, res) => {
  const user = await User.findById({ _id: req.userId.user }).populate(
    "playlists"
  );
  res.json(user.playlists);
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

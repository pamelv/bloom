const router = require("express").Router();
var Spotify = require("node-spotify-api");
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

module.exports = router;

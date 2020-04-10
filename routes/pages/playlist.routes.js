const router = require("express").Router();
var Spotify = require("node-spotify-api");
require("dotenv").config();

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});


router.get("/playlists", (req, res) => {

  console.log("hello");
  spotify
    .request(
      "https://api.spotify.com/v1/search?q=%22mood%22&type=playlist&limit=5"
    )
    .then(function (data) {
      res.json(data.playlists.items);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});

module.exports = router;

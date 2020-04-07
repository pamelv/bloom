const router = require("express").Router();
const axios = require("axios");
const SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "ea78de2c12f246fbb06cc03864829f9d",
  clientSecret: "3fc312f346af4b6ba74a0239ad04617e",
  redirectUri: "http://www.example.com/callback",
});
spotifyApi.setAccessToken(
  "BQCWNV04bmfoM4lC4Ym_3NnJdArsz0i4MZ6racfl9N7AoQO0GQo4ROvqRNcxspQsDD4jg7Xcb-2TLhcTUAFPGVqzOgsrW8JEF-jXrSRsE3iYn2shU7iMrjxRwjFzgJSTLSrJONc2hHExoF5DQ_QBzL035ZI"
);

router.get("/playlist/", (req, res) => {
  spotifyApi.searchPlaylists(`mood`, { limit: 5, offset: 10 }).then(
    (data) => {
      console.log("Found playlists are", data.body.playlists.items);
      res.json(data.body.playlists.items);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});
module.exports = router;

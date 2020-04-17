const router = require("express").Router();
const unirest = require("unirest");
require("dotenv").config();

const Podcast = require("../../models/podcasts.models");
const User = require("../../models/users.models");

router.get("/podcasts/happy", (req, res) => {
  console.log("hello");

  unirest
    .get(
      "https://listen-api.listennotes.com/api/v2/search?q=productive&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=144%2C88%2C122%2C100%2C133&published_after=1546318800000&only_in=title%2Cdescription&language=English&safe_mode=1"
    )
    .header("X-ListenAPI-Key", process.env.X_LISTENAPI_KEY)
    .then((response) => {
      res.json(response.body.results);
      //   res.send(JSON.stringify(response.body.results, null, 4));
    });
});
router.get("/podcasts/bleh", (req, res) => {
  console.log("hello");

  unirest
    .get(
      "https://listen-api.listennotes.com/api/v2/search?q=motivation&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=144%2C88%2C122%2C100%2C133&published_after=1546318800000&only_in=title%2Cdescription&language=English&safe_mode=1"
    )
    .header("X-ListenAPI-Key", process.env.X_LISTENAPI_KEY)
    .then((response) => {
      res.json(response.body.results);
      //   res.send(JSON.stringify(response.body.results, null, 4));
    });
});

router.get("/podcasts/sad", (req, res) => {
  console.log("hello");

  unirest
    .get(
      "https://listen-api.listennotes.com/api/v2/search?q=motivation&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=144%2C88%2C122%2C100%2C133&published_after=1546318800000&only_in=title%2Cdescription&language=English&safe_mode=1"
    )
    .header("X-ListenAPI-Key", process.env.X_LISTENAPI_KEY)
    .then((response) => {
      res.json(response.body.results);
      //   res.send(JSON.stringify(response.body.results, null, 4));
    });
});

router.get("/podcasts/:search", (req, res) => {
  console.log("hello");
  var paramSearch = req.params.search;
  console.log(paramSearch);
  var search = paramSearch.split("-").join("%20");
  console.log(search);
  unirest
    .get(
      `https://listen-api.listennotes.com/api/v2/search?q=${search}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=144%2C88%2C122%2C100%2C133&published_after=1546318800000&only_in=title%2Cdescription&language=English&safe_mode=1`
    )
    .header("X-ListenAPI-Key", process.env.X_LISTENAPI_KEY)
    .then((response) => {
      res.json(response.body.results);
      //   res.send(JSON.stringify(response.body.results, null, 4));
    });
});

router.get("/podcasts", async (req, res) => {
  const podcasts = await Podcast.find();
  res.json(podcasts);
});

router.post("/user/:id/podcasts", async (req, res) => {
  try {
    const podcast = await Podcast.create(req.body);
    const results = await User.findByIdAndUpdate(req.params.id, {
      $push: { podcasts: { $each: [podcast._id], $position: 0 } },
    });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.get("/user/:id/podcasts", async (req, res) => {
  const user = await User.findById(req.params.id).populate("podcasts");
  res.json(user.podcasts);
});

module.exports = router;

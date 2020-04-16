const router = require("express").Router();
const unirest = require("unirest");
require("dotenv").config();

// =========to save to our database==========
const podcast = require("../../models/podcasts.models");
const user = require("../../models/users.models");


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

// ===================to save to db====================
router.post("/podcast", (req, res) => {
  const newPodcast = req.body;
  console.log("why arent you saving to user?");
  console.log(newPodcast);
  podcast.create(newPodcast)
  // .then((response) => {
  //   res.json(response);
//   });
  .then(function(podcast){
    console.log("this is " + podcast);
    return user.findOneAndUpdate({}, { $push:{ podcasts: podcast._id } }, { new: true });
  })
  .then(function(dbUser){
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  });
});


module.exports = router;
const router = require("express").Router();
const unirest = require("unirest");
require("dotenv").config();

router.get("/podcasts", (req, res) => {
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


module.exports = router;

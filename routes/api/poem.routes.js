const router = require("express").Router();
const axios = require("axios");

// to save to our database
const poem = require("../../models/poems.models");
const user = require("../../models/users.models");

router.get("/poem/:title", (req, res) => {
  // console.log('hello');
  const title = req.params.title;
  axios
    .get(`http://poetrydb.org/title/${title}/title,author,lines.json`)
    .then((response) => {
      // ==================to generate four random poems====================
      const newArr = [];
      for (let i = 0; i < 4; i++) {
        const outerIndex = Math.floor(Math.random() * response.data.length);
        newArr.push(response.data[outerIndex]);
      }
      console.log(response.data);
      res.json(newArr);

      // ================SAVE TO DATABASE====================================

      router.post("/poem", (req, res) => {
        const newPoem = req.body;
        console.log(newPoem);
        poem
          .create(newPoem)
          //   .then((response) => {
          //     res.json(response);
          //   });
          .then(function (poem) {
            return user.findOneAndUpdate(
              {},
              { $push: { poems: poem._id } },
              { new: true }
            );
          })
          .then(function (dbUser) {
            res.json(dbUser);
          })
          .catch(function (err) {
            res.json(err);
          });
      });

      // ====================to generate only one poem=====================
      // const outerIndex =  Math.floor(Math.random() * response.data.length);
      // res.json(response.data[outerIndex]);

      // ================to generate one line of poem======================
      // const outerIndex =  Math.floor(Math.random() * response.data.length);
      // const innerIndex = Math.floor(Math.random() * response.data[outerIndex].lines.length);
      // res.json(response.data[outerIndex].lines[innerIndex]);
    });
});
module.exports = router;

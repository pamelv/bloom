const router = require("express").Router();

router.use("/api", require("./recipe.routes"));
router.use("/api", require("./poem.routes"));
router.use("/api", require("./quote.routes"));
router.use("/api", require("./playlist.routes"));
router.use("/api", require("./podcast.routes"));
router.use("/api", require("./exercise.routes"));
router.use("/api", require("./users.routes"));

module.exports = router;

const router = require("express").Router();

router.use("/api", require("./recipe.routes"));
router.use("/api", require("./poem.routes"));
router.use("/api", require("./quote.routes"));
router.use("/api", require("./playlist.routes"));
router.use("/api", require("./motivation.routes"));
module.exports = router;



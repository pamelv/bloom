const router = require("express").Router();

router.use("/api", require("./recipe.routes"));
router.use("/api", require("./poem.routes"));
module.exports = router;

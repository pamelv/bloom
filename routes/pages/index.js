const router = require("express").Router();

router.use("/", require("./home.routes"));
router.use("/mood", require("./mood.routes"));
router.use("/dashboard", require("./userdashboard.routes"));
router.use("/profile", require("./userprofile.routes"));
router.use("/login", require("./user.routes"));

module.exports = router;

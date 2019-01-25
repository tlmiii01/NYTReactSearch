const router = require("express").Router();
const articleRoutes = require("./articles.js");
const nytRoutes = require("./nyt.js")

router.use("/articles", articleRoutes);
router.use("/nyt", nytRoutes);

module.exports = router;
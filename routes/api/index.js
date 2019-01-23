const router = require("express").Router();
const articleRoutes = require("./articles.js");

router.use("/articles", articleRoutes);

module.exports = router;
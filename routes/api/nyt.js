const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.route("/:searchTerm")
  .get(nytController.getNYTArticles);

module.exports = router;
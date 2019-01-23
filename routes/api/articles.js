const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router.route("/:id")
  .get(articleController.findByID)
  .delete(articleController.remove);

module.exports = router;
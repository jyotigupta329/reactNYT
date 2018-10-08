
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

//Matches with "/api/articles/:id"
router
  .route("/:id")
//   .get(articlesController.findById)
//   .put(articlesController.update)
     .delete(articlesController.remove);

// router.route("*")
//   .get(client/build/index.html);
module.exports = router;
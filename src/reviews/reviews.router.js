const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/MethodNotAllowed");

// router.route("/").get(controller.list).all(methodNotAllowed);

router
  .route("/:reviewId")
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;

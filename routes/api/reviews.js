const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");
const usersController = require("../../controllers/userController");

router.route("/user")
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/reviews")
    .get(reviewController.findAll)
    .post(reviewController.create);


module.exports = router;
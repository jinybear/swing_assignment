const router = require("express").Router();
const { userController } = require("../controllers");

router.get("/:id", userController.getUserState);

module.exports = router;

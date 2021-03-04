const router = require("express").Router();
const { kickboardController } = require("../controllers");

router.get("/", kickboardController.getKickboards);
router.put("/on", kickboardController.getOnKickboard);
router.put("/off", kickboardController.getOffKickboard);

module.exports = router;

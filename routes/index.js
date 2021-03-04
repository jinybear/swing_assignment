const router = require("express").Router();
const userRouter = require("./userRouter");
const kickboardRouter = require("./kickboardRouter");

router.use("/users", userRouter);
router.use("/kickboards", kickboardRouter);

module.exports = router;

const express = require("express");
const router = express.Router();
const apiUserController = require("../../controllers/api/userController");

router.get("/", apiUserController.list);
router.get("/:id", apiUserController.show);
router.use("/users", userRouter);

module.exports = router;

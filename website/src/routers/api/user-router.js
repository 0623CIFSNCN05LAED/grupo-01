const express = require("express");
const router = express.Router();
const apiUserController = require("../../controllers/api/userController");

router.get("/apiUsers", apiUserController.list);
router.get("/apiUsers/:id", apiUserController.show);

module.exports = router;

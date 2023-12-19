const express = require("express");
const router = express.Router();
const apiUserController = require("../../controllers/api/userController");

router.get("/api/users", apiUserController.list);
router.get("/api/users/:id", apiUserController.show);

module.exports = router;

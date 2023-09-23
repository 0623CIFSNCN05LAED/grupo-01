// ************ Require's ************
const express = require("express");
const path = require("path");
const router = express.Router();

// ************ Controller Require ************
const userController = require("../controllers/user-controller");

// *************** Get All Users ***************
router.get("/", userController.index);

// ************ User Registration Form ************
router.get("/register", userController.register);

// **************** User Login Form ****************
router.get("/login", userController.login);

// ************** User Profile Form ****************
router.get("/profile/:id", userController.profileUser);

// ************** Delete one user ******************
router.delete("/:id", userController.deleteUser);

module.exports = router;

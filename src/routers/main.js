// ************ Require's ************
const { Router } = require("express");
const router = Router();

// ************ Controller Require ************
const mainController = require("../controllers/main-controller");
const userController = require("../controllers/user-controller");

router.get("/", mainController.index);
router.get("/search", mainController.search);
router.get("/cart", mainController.cart);
router.get("/user-profile", userController.profileUser);

const productRouter = require("./products");
router.use("/products", productRouter);
const userRouter = require("./users");
router.use("/users" , userRouter);

module.exports = router;
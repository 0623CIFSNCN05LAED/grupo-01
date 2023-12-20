// ************ Require's ************
const { Router } = require("express");
const router = Router();
// ************ Controller Require ************
const mainController2 = require("../controllers/main-controller2");
const mainController = require("../controllers/main-controller");
// ************ Routes of Index ************
router.get("/", mainController.index);
router.get("/search", mainController2.search);
router.get("/cart", mainController.cart);
router.get("/sucursales", mainController.sucursales);

// ************ Routes of Users ************
const userRouter = require("./users");
router.use("/users", userRouter);
// ************ Routes of Product ************
const productRouter = require("./products");
router.use("/products", productRouter);

module.exports = router;

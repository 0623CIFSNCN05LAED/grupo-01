// ************ Require's ************
const { Router } = require("express");
const router = Router();

// ************ Controller Require ************
const mainController = require("../controllers/main-controller");
// ************ Routes of Index ************
router.get("/", mainController.index);
router.get("/search", mainController.search);
router.get("/cart", mainController.cart);

const productRouter = require("./products");
router.use("/products", productRouter);
const userRouter = require("./users");
router.use("/users", userRouter);

const productRouter2 = require("./products2");
router.use("/products", productRouter2);

module.exports = router;

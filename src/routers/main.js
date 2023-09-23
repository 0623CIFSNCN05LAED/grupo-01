// ************ Require's ************
const { Router } = require("express");
const router = Router();

// ************ Controller Require ************
const mainController = require("../controllers/main-controller");

router.get("/", mainController.index);

router.get("/login", mainController.login);
router.get("/cart-shopping", mainController.cartshopping);
router.get("/details-product", mainController.detailsproduct);
router.get("/register", mainController.register);

const productRouter = require("./products");
router.use("/products", productRouter);

// const userRouter = require("./users");
// router.use("/users"),userRouter;

module.exports = router;

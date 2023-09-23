// ************ Require's ************
const { Router } = require("express");
const router = Router();

// ************ Controller Require ************
const mainController = require("../controllers/main-controller");
const userController = require("../controllers/user-controller");

router.get("/", mainController.index);

router.get("/login", mainController.login);
router.get("/cart", mainController.cart);
router.get("/details-product/:id", mainController.detailsproduct);
router.get("/register", mainController.register);
router.post("/register" , userController.register)

const productRouter = require("./products");
router.use("/products", productRouter);

// const userRouter = require("./users");
// router.use("/users"),userRouter;

module.exports = router;

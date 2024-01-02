// ************ Require's ************
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/authMiddleware");
// ************ Controller Require ************

const mainController = require("../controllers/main-controller");

const cartShoppingController = require("../controllers/cartShoppingController");
// ************ Routes of Index ************
router.get("/", mainController.index);
router.get("/search", mainController.search);
//router.get("/cart", mainController.cart);
router.get("/sucursales", mainController.sucursales);

// ************ Routes of Users ************
const userRouter = require("./users");
router.use("/users", userRouter);
// ************ Routes of Product ************
const productRouter = require("./products");
router.use("/products", productRouter);
// ************ Routes of Cart Shopping ************
/* const cartRouter = require("./cart-shopping");
router.use("/cart", cartRouter); */
router.get("/cart", authMiddleware, cartShoppingController.ShoppingCart);
router.post(
  "/cart/:id",
  authMiddleware,
  cartShoppingController.agregarACarrito
);
router.delete(
  "/cart/:id",
  authMiddleware,
  cartShoppingController.deleteProductCartShopping
);

module.exports = router;

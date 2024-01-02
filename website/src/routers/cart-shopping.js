const { Router } = require("express");
const cartShoppingController = require("../controllers/cartShoppingController");
const authMiddleware = require("../middledware/authMiddleware");
const router = Router();

// ************* Rutas *************

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

// Export

module.exports = router;

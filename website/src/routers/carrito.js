const { Router } = require("express");
const router = Router();
cartController = require("../controllers/cartController");

//router.get("/cart", cartController.index);
router.get("/cart/historial", cartController.cart);

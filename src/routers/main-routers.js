const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/cart-shopping", mainController.cartshopping);
router.get("/details-product", mainController.detailsproduct);
// router.get("/create", mainController.create)

module.exports = router;

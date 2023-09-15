// ************ Require's ************
const { Router } = require("express");
const router = Router();


// ************ Controller Require ************
const mainController = require("../controllers/main-controller");

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/cart-shopping", mainController.cartshopping);
router.get("/details-product", mainController.detailsproduct);
// router.get("/create", mainController.create)

module.exports = router;
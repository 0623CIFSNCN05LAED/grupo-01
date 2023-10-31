const express = require("express");
const router = express.Router();
const path = require("path");
const upload = require("../middleware/multerProductMiddleware");

// ************ Controller Require ************
const productsController = require("../controllers/product-controller2");

// /*** GET ALL PRODUCTS ***/
router.get("/", productsController.index); //Listado de productos
module.exports = router;

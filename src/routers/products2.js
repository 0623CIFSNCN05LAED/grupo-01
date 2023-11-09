const express = require("express");
const router = express.Router();
const path = require("path");
const upload = require("../middleware/multerProductMiddleware");

// ************ Controller Require ************
const productsController = require("../controllers/product-controller2");

// /*** GET ALL PRODUCTS ***/
router.get("/", productsController.index); //Listado de productos
router.get("/products/detail/:id", productsController.detail); //Detalle de un producto
router.get("/create", productsController.create); //Formulario de creación de productos
router.post("/", upload.single("image"), productsController.store); //Acción de creación (donde se envía el formulario)

module.exports = router;

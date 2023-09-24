const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

// ************ Controller Require ************
const productsController = require("../controllers/product-controller");

// /*** GET ALL PRODUCTS ***/
router.get("/", productsController.index); //Listado de productos

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create); //Formulario de creación de productos
router.post("/", upload.single("image"), productsController.store); //Acción de creación (donde se envía el formulario)

/*** GET ONE PRODUCT ***/
router.get("/details-product/:id", productsController.detail); //Detalle de un producto

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit); //Formulario de edición de productos
router.put("/:id", upload.single("image"), productsController.update);//Acción de edición (donde se envia el formulario)

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);//Ación de borrado

module.exports = router;
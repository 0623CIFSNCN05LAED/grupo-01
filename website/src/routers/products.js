const { Router } = require("express");
const router = Router();
const upload = require("../middleware/multerProductMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// ************ Controller Require ************
const productsController = require("../controllers/product-controller2");

// /*** GET ALL PRODUCTS ***/
router.get("/", productsController.index); //Listado de productos

/*** GET ONE PRODUCT ***/
router.get("/details-product/:id", productsController.detail); //Detalle de un producto
/*** GET ONE PRODUCT ***/
router.get("/details-product-user/:id", productsController.detailUser); //Detalle de un producto para el usuario

/*** EDIT ONE PRODUCT ***/
router.get(
  "/edit/:id",
  authMiddleware,
  adminMiddleware,
  productsController.edit
); //Formulario de edición de productos
router.put("/:id", upload.single("image"), productsController.update); //Acción de edición (donde se envia el formulario)

/*** CREATE ONE PRODUCT ***/
router.get(
  "/create",
  authMiddleware,
  adminMiddleware,
  productsController.create
); //Formulario de creación de productos
router.post("/", upload.single("image"), productsController.store); //Acción de creación (donde se envía el formulario)
/*** DELETE ONE PRODUCT***/
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  productsController.destroy
);
/* Vista del crud de productos para el admin */
router.get(
  "/all-products-edit",
  authMiddleware,
  adminMiddleware,
  productsController.productsAdmin
);
/*** EDIT ONE PRODUCT ***/
router.post(
  "/all-products-edit",
  upload.single("image"),
  adminMiddleware,
  productsController.edit
); //Acción de creación (donde se envía el formulario)

module.exports = router;

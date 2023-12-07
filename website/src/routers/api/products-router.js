const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/productsControllers");

router.get("/apiProducts", apiProductsController.list);
router.get("/search", apiProductsController.search);
router.get("/apiProducts/:id", apiProductsController.show);
router.post("/apiProducts", apiProductsController.store);
router.delete("/apiProducts/:id", apiProductsController.delete);

module.exports = router;

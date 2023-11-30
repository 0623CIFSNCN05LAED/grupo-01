const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/productsControllers");

router.get("/apiProducts", apiProductsController.list);
router.get("/apiProducts/:id", apiProductsController.show);
router.post("/apiProducts", apiProductsController.store);

module.exports = router;

const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/productsControllers");

router.get("/apiProducts", apiProductsController.list);
router.get("/apiProducts/:id", apiProductsController.show);
router.post("/apiProducts", apiProductsController.store);
router.use("/users", userRouter);

module.exports = router;

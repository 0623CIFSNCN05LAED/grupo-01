const express = require("express");
const router = express.Router();
const userRouter = require("../users");
const productsRouter = require("../products2");
//const apiProductsRouter = require("../apiProducts");

router.use("/users", userRouter);
router.use("/products", productsRouter);
//router.use("/apiProducts", productsRouter);

module.exports = router;

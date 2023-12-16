const express = require("express");
const router = express.Router();
const userRouter = require("../users");
const productsRouter = require("../products");

router.use("/users", userRouter);
router.use("/products", productsRouter);

module.exports = router;

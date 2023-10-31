const productService = require("../services/productService2");
const controller = {
  index: async (req, res) => {
    // Do the magic
    const products = await productService.getAllProducts();
    res.render("products", { products });
  },
};

module.exports = controller;

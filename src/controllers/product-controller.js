const productService = require("../services/productService");

const controller = {
    // Root - Show all products
    index: (req, res) => {
      // Do the magic
      const products = productService.getAllProducts();
      console.log(products)
    }
}

module.exports = controller;
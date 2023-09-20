const path = require("path");
const productService = require("../services/productService");
const mainController = {
  index: (req, res) => {
    const womenProducts = productService.getWomenProducts();
    const menProducts = productService.getMenProducts();
    res.render("index",{
      womenProducts,
      menProducts
    });
  },
  login: (req, res) => {
    res.render("login");
  },
  cart: (req, res) => {
    res.render("cart.ejs");
  },
  detailsproduct: (req, res) => {
    res.render("details-product.ejs");
  },

};

module.exports = mainController;

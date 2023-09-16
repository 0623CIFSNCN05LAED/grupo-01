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
  cartshopping: (req, res) => {
    res.render("cart-shopping.ejs");
  },
  detailsproduct: (req, res) => {
    res.render("details-product.ejs");
  },

};

module.exports = mainController;

const path = require("path");
const mainController = {
  index: (req, res) => {
    res.render("index");
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

const path = require("path");
const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },
  cartshopping: (req, res) => {
    res.render(path.join(__dirname, "../views/cart-shopping.ejs"));
  },
  detailsproduct: (req, res) => {
    res.render(path.join(__dirname, "../views/details-product.ejs"));
  },
};

module.exports = mainController;

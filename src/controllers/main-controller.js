const productService = require("../services/productService");
const mainController = {
  index: (req, res) => {
    const inOffers = productService.getItemByOffer();
    const inFeatured = productService.getItemByFeatured();
    res.render("index", {
      inOffers,
      inFeatured,
    });
  },
  login: (req, res) => {
    res.render("login");
  },
  cart: (req, res) => {
    res.render("cart.ejs");
  },
  detailsproduct: (req, res) => {
    const inOffers = productService.getItemByOffer();
    const inFeatured = productService.getItemByFeatured();
    res.render("details-product.ejs", {
      inOffers,
      inFeatured
    });
  },
  register: (req, res) => {
    res.render("register2.ejs");
  },
};

module.exports = mainController;

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
  search: (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = productService.searchProducts(keywords);
    res.render("results", { foundProducts });
  },
  login: (req, res) => {
    res.render("login");
  },
  cart: (req, res) => {
    res.render("cart.ejs");
  },
  register: (req, res) => {
    res.render("register2.ejs");
  },
};

module.exports = mainController;

const productService = require("../services/productService");
const inOffers = productService.getItemByOffer();
const inFeatured = productService.getItemByFeatured();
const mainController = {
  index: (req, res) => {
    res.render("index", {
      inOffers,
      inFeatured,
    });
  },
  sucursales: (req, res) => {
    res.render("sucursales");
  },
  /*  search: (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = productService.searchProducts(keywords);
    res.render("results", { foundProducts });
  }, */
  cart: (req, res) => {
    res.render("cart", {
      inOffers,
      inFeatured,
    });
  },
};

module.exports = mainController;

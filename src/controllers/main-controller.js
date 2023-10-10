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
  cart: (req, res) => {
    res.render("cart");
  }
};

module.exports = mainController;

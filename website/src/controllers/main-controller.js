const productService = require("../services/productService");
const productService2 = require("../services/productService2");
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
  search: async (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = await productService2.search(keywords);
    console.log(foundProducts);
    res.render("results", { foundProducts });
  },
  cart: (req, res) => {
    res.render("cart", {
      inOffers,
      inFeatured,
    });
  },
};

module.exports = mainController;

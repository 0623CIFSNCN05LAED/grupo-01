const productService = require("../services/productService2");
//const inOffers = productService.getItemByOffer();
//const inFeatured = productService.getItemByFeatured();
const mainController2 = {
  search: async (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = await productService.search(keywords);
    console.log(foundProducts);
    res.render("results", { product: foundProducts });
  },
};

module.exports = mainController2;

const productService = require("../services/productService2");
const genresService = require("../services/genresServices");
const sizesService = require("../services/sizeServices");
const colorService = require("../services/colorServices");
const controller = {
  index: async (req, res) => {
    // Do the magic
    const products = await productService.getAllProducts();
    res.render("products", { products });
  },

  create: async (req, res) => {
    const allSizesdb = sizesService.getAllSizes();
    const allColorsdb = colorService.getAllColors();
    const allGenresdb = genresService.getAllGenres();

    const [allSizes, allColors, allGenres] = await Promise.all([
      allSizesdb,
      allColorsdb,
      allGenresdb,
    ]);

    res.render("product-create-form", {
      colorList: allColors,
      sizeList: allSizes,
      genresList: allGenres,
      //userData: req.session.userData ? req.session.userData : null,
    });
  },
  store: async (req, res) => {
    await productService.createProduct(req.body);
    res.redirect("/products");
  },
};

module.exports = controller;

const productService = require("../services/productService2");
const genresService = require("../services/genresServices");
const sizesService = require("../services/sizeServices");
const colorService = require("../services/colorServices");
const controller = {
  // Root - Show all products
  index: async (req, res) => {
    const products = await productService.getAllProducts();
    res.render("products", { products });
  },
  // Create - Form to create
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
    });
  },
  // Create -  Method to store
  store: async (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      sku: req.body.sku,
      discount: Number(req.body.discount),
      genre_id: req.body.genre_id,
      size_id: req.body.size_id,
      color_id: req.body.color_id,
      image: req.file ? req.file.filename : "default.png",
      description: req.body.description,
    };
    await productService.createProduct(product);
    res.redirect("/products");
  },
  // Detail - Detail from one product
  detail: async (req, res) => {
    const product = await productService.getProductDetail(req.params.id);
    console.log('product: ', product);
    res.render("details-product", { product });
  },
  // Update - Form to edit
  edit: (req, res) => {
    const product = productService.getProductDetail(req.params.id);
    const color = colorService.getAllColors();
    const size = sizesService.getAllSizes();
    const genres = genresService.getAllGenres();

    Promise.all([product, color, size, genres]).then(
      ([product, color, size, genres]) => {
        console.log("product", product);
        res.render("product-edit-form", { product, color, size, genres });
      }
    );
  },
  // Update - Method to update
  update: (req, res) => {
    movieService.updateMovie(req.params.id, req.body).then((movie) => {
      res.redirect("/movies/detail/" + req.params.id);
    });
  },
};

module.exports = controller;

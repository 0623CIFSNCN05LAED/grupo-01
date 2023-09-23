const productService = require("../services/productService");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
    const products = productService.getAllProducts();
    res.render("products", { products });
  },
  // Detail - Detail from one product
  detail: (req, res) => {
    const inOffers = productService.getItemByOffer();
    const id = req.params.id;
    const product = productService.getFormattedProduct(id);
    res.render("detail-product",{
      inOffers,
      product 
    });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const product = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      type: req.body.type,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file.filename || "default.png",
    };
    productService.createProduct(product);
    res.redirect("/products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render("product-edit-form", { product });
  },
  // Update - Method to update
  update: (req, res) => {
    const product = req.body;
    console.log(product);
    res.redirect("/products");
  },

  // Delete - Delete one product from DDBB
  destroy: (req, res) => {
    const id = req.params.id;
    console.log(`deleting product id: ${id}`);
    res.redirect("/products");
  },
};

module.exports = controller;

const productService = require("../services/productService")

const controller = {
  // Raiz - Muestra todos los productos
  index: (req, res) => {
    const products = productService.getAllProducts();
    res.render("index",);
  },

  // Detail - Detalle de un producto
  detail: (req,res) => {
    const id = req.params.id;
    const product = productService.getProducts();
    res.render("detail",);
  },

  // Create - Vista del Formulario de Producto
  create: (req,res) =>{
    res.render("product-create-form");
  },

  // Crea - Metodo de almacenar
  store: (req,res) => {

  },

  // Editar - Vista del formulario del producto a editar
  edit: (req,res) => {

  },

  // Editar - Metodo de editar producto
  update: (req,res) => {

  },

  // Eliminar - Elimina un producto desde BBDD
  destroy: (req,res) => {

  }

}

module.exports = controller;
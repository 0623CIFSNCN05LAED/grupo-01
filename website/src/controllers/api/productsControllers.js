const productServices = require("../../services/productService2");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  list: async (req, res) => {
    const products = await productServices.getAllProducts();
    return res.json({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      total: products.length,
      data: products,
    });
  },
  show: async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProductDetail(id);

    return res.json({
      meta: {
        url: req.originalUrl,
        status: 200,
      },
      data: product,
      Urlimage: req.headers.host + "/images/products/" + product.image,
    });
  },
  store: async (req, res) => {
    const product = {
      id: uuidv4(),
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
    const newProduct = await productServices.createProduct(product);
    return res.json({
      data: newProduct,
      status: 200,
      created: "ok",
    });
  },
  delete: async (req, res) => {
    const deletedProduct = await productServices.deleteProduct(req.params.id);
    return res.json(deletedProduct);
  },
  search: async (req, res) => {
    const keywords = req.query.keywords;
    const foundproduct = await productServices.search(keywords);
    if (foundproduct.length > 0) {
      return res.json(foundproduct);
    }
    return res.json("No existe el producto");
  },
};

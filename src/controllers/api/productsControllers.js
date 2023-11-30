const productServices = require("../../services/productService2");
const DB = require("../../database/models");
const Op = DB.sequelize.op;
module.exports = {
  list: async (req, res) => {
    const products = await productServices.getAllProducts();
    return res.json({
      total: products.length,
      data: products,
      status: 200,
    });
  },
  show: async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProductDetail(id);
    return res.json(product);
  },
};

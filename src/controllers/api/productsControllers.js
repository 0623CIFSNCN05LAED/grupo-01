const userServices = require("../../services/productService2");
const Op = DB.sequelize.op;
const DB = require("../../database/models");
module.exports = {
  list: async (req, res) => {
    await DB.products.findAll();
    return res.json(products);
  },
  show: async (req, res) => {
    await DB.products.findByPk(req.params.id);
    return res.status(200).json({
      data: product,
      status: 200,
    });
  },
};

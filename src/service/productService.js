const db = require("../data/db");


const productServices = {
    getAllProducts: () => {
      return db.products.findAll();
    }
}

module.exports = productServices;
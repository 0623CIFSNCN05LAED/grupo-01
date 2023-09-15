const db = require("../data/db");


const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

const formProductPrices = function (product) {
  const PriceWithDiscount = product.price * (1 - product.discount);
  

};

const productServices = {
  getAllProducts: () => {
    return db.products.findAll();
  },
  getProduct: (id) => {
    return db.products.findById(id);
  },
  getFormattedProduct: (id) => {
    const product = db.products.findById(id);
    return formatProductPrices(product);
  }

}

module.exports = productServices;
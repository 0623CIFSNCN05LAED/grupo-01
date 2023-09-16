const db = require("../data/db");

const formatProductPrices = function (product) {
  const priceWithDiscount = product.price * (1 - product.discount);
  product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
  })}`;
  product.price = `$ ${product.price.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
  })}`;
  product.discount = product.discount.toLocaleString("es-AR");
  return product;
};

const productServices = {
  getAllProducts: () => {
    return db.products.findAll();
  },
  getProducts: (id) => {
    return db.products.findById(id);
  },
  getFormattedProduct: (id) => {
    const product = db.products.findById(id);
    return formatProductPrices(product);
  },
  getFemaleProducts : () => {
    const products = db.products.findAll().filter((product)=>product.category == "Female");
    return formatProductPrices(products);
  },
  getMaleProducts : () => {
    const products = db.products.findAll().filter((product)=>product.category == "Male");
    return formatProductPrices(products);
  },
  searchProducts: (query)=>{
    const products = db.products.findAll().filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return formatProductPrices(products);
  },
  createProduct: (product) => {

  },
  updateProduct: (id,product) => {

  },
  deleteProduct: (id) => {

  }
}

module.exports = productServices;
const db = require("../data/db");

const formatProductPrices = function (product) {
  const priceWithDiscount = product.price - product.price * (product.discount / 100);
  product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;
  product.price = `$ ${product.price.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;
  product.discount = product.discount.toLocaleString("es");
  return product;
};

const formatProductsPrices = function (products) {
  return products.map((product) => formatProductPrices(product));
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
  getWomenProducts : () => {
    const products = db.products
    .findAll()
    .filter((product)=>product.category == "women");
    return formatProductsPrices(products);
  },
  getMenProducts : () => {
    const products = db.products
      .findAll()
      .filter((product)=>product.category == "men");
    return formatProductsPrices(products);
  },
  searchProducts: (query)=>{
    const products = db.products.findAll().filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return formatProductsPrices(products);
  },
  createProduct: (product) => {

  },
  updateProduct: (id,product) => {

  },
  deleteProduct: (id) => {

  }
}

module.exports = productServices;
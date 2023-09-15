const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { products } = require("../db");

module.exports = {
  getProducts: function () {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
  },
  saveProduct: function (products) {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    fs.writeFileSync(productsFilePath,JSON.stringify("",null,2));
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product)=>product.id === id);
    return product;
  },

    
}

console.log(products)


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
    findAll: function () {
        return this.getProducts();
    },
    
}

console.log(products)


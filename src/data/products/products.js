const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getProducts: function () {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
  },
  saveProduct: function (products) {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2));
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product)=>product.id == id);
    return product;
  },
  create: function (product) {
    const products = this.getProducts();
    const item = {
      id: uuidv4(),
      ...product,
    };
    products.push(item);
    this.saveProduct(products);
  },
  update: function (id, product) {
    //cargo todos los productos
    const products = this.getProducts();
    //busco un producto por su id
    const editProduct =  products.find((product) => product.id == id);
    //piso todas sus propiedades
    //Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
    Object.assign(editProduct,product);
    //guardo los productos
    this.saveProduct(products);
  },
  delete : function (id) {
    //cargo todos los productos
    const products = this.getProducts();
    //Devuelde todos los productos menos 1
    const notEliminated = products.filter(product => product.id !== id);
    //Guardo los productos que se filtraron 
    this.saveProduct(notEliminated);
  },
  deleteImage: function(image) {
    const pathImage = "/../../../public/images/products/";
    fs.unlinkSync(path.join(__dirname,pathImage + image));
  }
}
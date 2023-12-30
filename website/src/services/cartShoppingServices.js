const { Cart_shopping } = require("../database/models");
const productServices = require("./productService2");

const cartShoppingServices = {
  getAtllCartShopping: () => {
    return Cart_shopping.findAll();
  },
  getAllCartShoppingUser: (idUser) => {
    return Cart_shopping.findAll({
      where: { user_id: idUser },
    });
  },
  addToCartShopping: (product, idUser, quantity, total) => {
    Cart_shopping.create({
      product_name: product.product_name,
      product_id: product.id,
      user_id: idUser,
      image: product.image,
      total: total,
      quantity: quantity,
    });
  },
  deleteProductFromCart: (id) => {
    return Cart_shopping.destroy({
      where: { id: id },
    });
  },
  productsFilter: (products, req) => {
    const user = req.session.logueado;
    const userId = user.id;
    const productsUser = [];

    products.forEach((product) => {
      if (userId === product.user_id) {
        productsUser.push(product);
      }
    });

    return productsUser;
  },
  getTotalPrice: (productsUser) => {
    let total = 0;

    productsUser.forEach((product) => {
      total += product.total;
    });

    return total;
  },
  updateQuantity: (quantity, total, id) => {
    return Cart_shopping.update(
      {
        quantity: quantity,
        total: total,
      },
      {
        where: { id: id },
      }
    );
  },
  addToCartIteration: (idProduct, userId, quantity, cartProducts, res) => {
    if (cartProducts.length < 1) {
      productServices.getProductDetail(idProduct).then((product) => {
        const total = product.price * quantity;
        cartShoppingServices.addToCartShopping(
          product,
          userId,

          quantity,
          total
        );
        return res.redirect("/cart");
      });
    } else {
      for (let i = 0; i < cartProducts.length; i++) {
        if (
          cartProducts[i].user_id == userId &&
          cartProducts[i].id_product == idProduct
        ) {
          return productServices.getProductDetail(idProduct).then((product) => {
            const newQuantity = cartProducts[i].quantity + quantity;
            const newTotal = product.price * newQuantity;
            cartShoppingServices.updateQuantity(
              newQuantity,
              newTotal,
              cartProducts[i].id
            );
            res.redirect("/cart");
          });
        }
      }

      return productServices.getProductDetail(idProduct).then((product) => {
        const total = product.price * quantity;
        cartShoppingServices.addToCartShopping(product, quantity, total);
        res.redirect("/cart");
      });
    }
  },
};
module.exports = cartShoppingServices;

const { Cart_shopping } = require("../database/models");
const productServices = require("./productServices2");
module.exports = {
  getAtllCartShopping: () => {
    return Cart_shopping.findAll();
  },
  addToCartShopping: (product, size, quantity, total) => {
    Cart_shopping.create({
      image: product.image,
      product_name: product.product_name,
      id_product: product.id,
      total: total,
      quantity: quantity,
      size: size,
    });
  },
  deleteProductCartShopping: (id) => {
    return Cart_shopping.destroy({
      where: { id: id },
    });
  },
  getTotalPrice: (productsCart) => {
    let total = 0;

    productsCart.forEach((product) => {
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
  addToCartIteration: (idProducto, size, quantity, cartProducts, res) => {
    if (cartProducts.length < 1) {
      productServices.getProductDetail(idProducto).then((product) => {
        const total = product.price * quantity;
        cartShoppingServices.addToCartShopping(product, size, quantity, total);
        return res.redirect("/cart");
      });
    } else {
      for (let i = 0; i < cartProducts.length; i++) {
        if (
          cartProducts[i].size == size &&
          cartProducts[i].id_product == idProducto
        ) {
          return productServices
            .getProductDetail(idProducto)
            .then((product) => {
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

      return productServices.getProductDetail(idProducto).then((product) => {
        const total = product.price * quantity;
        shoppingCartServices.addToCartShopping(product, size, quantity, total);
        res.redirect("/cart");
      });
    }
  },
};
module.exports = cartShoppingServices;

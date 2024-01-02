const cartShoppingServices = require("../services/cartShoppingServices");
const userService = require("../services/userService");
module.exports = {
  ShoppingCart: async (req, res) => {
    const products = await cartShoppingServices.getAtllCartShopping();
    const productsUser = await cartShoppingServices.productsFilter(
      products,
      req
    );
    const total = await cartShoppingServices.getTotalPrice(productsUser);
    console.log("shoppingcart", productsUser, total);
    res.render("cart", { productsUser, total });
    // console.log("shoppingcart", productsUser, total);
  },

  agregarACarrito: async (req, res) => {
    const idProduct = req.params.id;
    const user = req.session.usuario;
    console.log("datos de usuario " + user.id);
    const quantity = Number(req.body.quantity);
    const cartProducts = await cartShoppingServices.getAllCartShoppingUser(
      user.id
    );
    console.log("cartproduct", cartProducts);
    cartShoppingServices.addToCartIteration(
      idProduct,
      user.id,
      quantity,
      cartProducts,
      res
    );
  },

  deleteProductCartShopping: async (req, res) => {
    const id = req.params.id;
    cartShoppingServices
      .deleteProductFromCart(id)
      .then(() => res.redirect("/cart"));
  },
};

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
    res.json("cart", { productsUser, total });
    console.log("shoppingcart", productsUser, total);
  },

  agregarACarrito: async (req, res) => {
    const idProduct = req.params.id;
    const user = req.session.usuario;
    const userId = user.id;
    const quantity = Number(req.body.quantity);
    const cartProducts = await cartShoppingServices.getAllCartShoppingUser(
      userId
    );
    console.log("cartproduct", cartProducts);
    cartShoppingServices.addToCartIteration(
      idProduct,
      userId,
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

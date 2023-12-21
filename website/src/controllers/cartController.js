const cartServices = require("../services/productService2");

const controller = {
  index: async (req, res) => {
    res.render("/cart", { users });
  },

  add: async (req, res) => {
    const productId = req.body.id;
    try {
      await cartServices.addToCart(productId);
      res.json({ status: "success" });
    } catch (err) {
      console.log(err);
      res.status(400).send("Error adding to Cart");
    }
  },
};

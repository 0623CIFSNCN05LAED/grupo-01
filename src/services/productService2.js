const { Products, Color, Size, Genres } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  getAllProducts: () => {
    return Products.findAll();
  },
  /*   getNewestProducts: () => {
    return Products.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    });
  }, */
  /* getRecomendedMovies: () => {
    return Movies.findAll({
      where: {
        rating: { [Sequelize.Op.gte]: 8 },
      },
    });
  }, */
  getProductDetail: (id) => {
    return Products.findByPk(id, {
      include: ["color", "size", "genres"],
    }).then((product) => {
      return {
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        colorName: product.color?.name_color ?? "No tiene color",
        color_id: product.color_id,
        genreName: product.genres?.name ?? "No tiene género",
        genre_id: product.genre_id,
        sizeName: product.size?.name_size ?? "No tiene género",
        size_id: product.size_id,
        sku: product.sku,
      };
    });
  },
  search: async (query) => {
    const product = await Products.findOne({
      where: {
        name: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: ["color", "size", "genres"],
    });
    return product;
  },
  createProduct: (product) => {
    return Products.create(product);
  },
  updateProduct: (id, body) => {
    return Products.update(
      {
        image: body.image,
        name: body.name,
        description: body.description,
        price: body.price,
        discount: body.discount,
        color_id: body.color_id,
        size_id: body.size_id,
        genre_id: body.genre_id,
        sku: body.sku,
      },
      {
        where: { id: id },
      }
    );
  },

  deleteProduct: (id) => {
    return Products.destroy({
      where: { id: id },
    });
  },
};

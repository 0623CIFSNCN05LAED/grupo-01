const { Products, Color, Size } = require("../database/models");
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
      // return product.toJSON()

      return {
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        colorName: product.color?.name_color ?? "No tiene color",
        color_id: product.color_id,
        genreName: product.genre?.name ?? "No tiene género",
        genre_id: product.genre_id,
        sizeName: product.size?.name_size ?? "No tiene género",
        size_id: product.size_id,
        sku: product.sku,
      };
    });
  },
  /*  search: async (query) => {
    const movie = await Movies.findOne({
      where: {
        title: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: ["genre", "actors"],
    });
    return movie;
  }, */
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
  /*
  deleteMovie: (id) => {
    // Busco todos los actores que tengan como pelicula favorita la que quiero borrar
    const actorsWithFavoriteMovie = Actors.findAll({
      where: { favorite_movie_id: id },
    }).then((actors) => {
      return actors.map((actor) => {
        return actor.update({ favorite_movie_id: null });
      });
    });

    // Busco la pelicula que quiero borrar y elimino la relacion con los actores
    const actorMovies = Movies.findByPk(id, {
      include: ["actors"],
    }).then((movie) => {
      return movie.actors.map((actor) => {
        return actor.removeMovie(movie);
      });
    });

    // Espero a que se eliminen las relaciones y luego elimino la pelicula
    return Promise.all([actorsWithFavoriteMovie, actorMovies]).then(() => {
      return Movies.destroy({
        where: { id: id },
      });
    });
  }, */
};

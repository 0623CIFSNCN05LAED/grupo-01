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
      include: ["color", "size"],
    }).then((product) => {
      // return product.toJSON()

      return {
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        /*  color: product.color.map((color) => {
          return {
            id: color.id,
            name_color: color.name_color,
                        
          };
        }), */
        /*  size: product.size.map((size) => {
          return {
            id: size.id,
            name_size: size.name_size,
                        
          };
        }), */
        genreName: movie.genre?.name ?? "No tiene género",
        genre_id: movie.genre_id,
        length: movie.length,
      };
    });
  },
  search: async (query) => {
    const movie = await Movies.findOne({
      where: {
        title: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: ["genre", "actors"],
    });
    return movie;
  },
  createMovie: (body) => {
    return Movies.create({
      title: body.title,
      rating: body.rating,
      awards: body.awards,
      release_date: body.release_date,
      length: body.length,
      genre_id: body.genre_id,
    });
  },
  updateMovie: (id, body) => {
    return Movies.update(
      {
        title: body.title,
        rating: body.rating,
        awards: body.awards,
        release_date: body.release_date,
        length: body.length,
        genre_id: body.genre_id,
      },
      {
        where: { id: id },
      }
    );
  },
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
  },
};

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Products",
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
      sku: DataTypes.STRING,
    },
    {
      tableName: "products",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Cart_shopping, {
      as: "cart_shopping",
      through: "orders",
      foreignKey: "product_id",
      otherKey: "shopping_cart_id",
      timestamps: false,
    });

    Model.belongsToMany(db.Category, {
      as: "category",
      through: "products_category",
      foreignKey: "product_id",
      otherKey: "category_id",
    });

    Model.belongsTo(db.Size, {
      as: "size",
      foreignKey: "size_id",
    });

    Model.belongsTo(db.Color, {
      as: "color",
      foreignKey: "color_id",
    });

    Model.belongsTo(db.Genres, {
      as: "genres",
      foreignKey: "genre_id",
    });
  };
  return Model;
};

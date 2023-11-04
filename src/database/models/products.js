module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Products",
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
      SKU: DataTypes.INTEGER,
    },
    {
      tableName: "products",
      /*  createdAt: "created_at",
      updatedAt: "updated_at", */
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Category, {
      as: "category",
      through: "products_category",
      foreignKey: "product_id",
      otherKey: "category_id",
    });

    Model.belongsToMany(db.Type, {
      as: "type",
      through: "type_product",
      foreignKey: "product_id",
      otherKey: "type_id",
    });

    Model.belongsToMany(db.Orders, {
      as: "orders",
      through: "Cart_shopping",
      foreignKey: "product_id",
      otherKey: "order_id",
    });

    Model.belongsToMany(db.Size, {
      as: "size",
      through: "size_product",
      foreignKey: "size_id",
      otherKey: "product_id",
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

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Cart_shopping",
    {
      product_name: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      image: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "cart_shopping",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Products, {
      as: "product",
      through: "orders",
      foreignKey: "shopping_cart_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };

  /*Model.belongsToMany(model.Products, {
      as: "products",
      through: "products_shopping_cart",
      foreignKey: "id_shopping_cart",
      otherKey: "id_product",
      timestamps: false
    });*/

  return Model;
};

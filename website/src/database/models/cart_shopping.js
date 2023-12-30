module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Cart_shopping",
    {
      product_name: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      image: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "cart_shopping",
      timestamps: false,
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

    Model.belongsTo(db.Users, {
      as: "users",
      foreignKey: "user_id",
    });
  };

  return Model;
};

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Cart_shopping",
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "cart_shoping",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Products, {
      as: "product",
      foreignKey: "product_id",
    });

    Model.belongsTo(db.Orders, {
      as: "orders",
      foreignKey: "order_id",
    });
  };

  return Model;
};

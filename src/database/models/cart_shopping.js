module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Cart_shopping",
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      SKU: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "cart_shoping",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsTo(db.Products, {
      as: "product",
      foreignkey: "product_id",
    });

    Model.belongsTo(db.Orders, {
      as: "orders",
      foreignkey: "order_id",
    });
  };

  return Model;
};

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Orders",
    {
      user_type_id: DataTypes.INTEGER,
      ammount: DataTypes.INTEGER,
      shipping_adress: DataTypes.STRING,
      order_adress: DataTypes.STRING,
      order_email: DataTypes.STRING,
      order_date: DataTypes.STRING,
      order_state: DataTypes.STRING,
    },
    {
      tableName: "orders",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Cart_shopping, {
      as: "cart_shopping",
      foreignKey: "order_id",
    });

    Model.belongsTo(db.Users, {
      as: "users",
      foreignKey: "user_id",
    });
  };

  return Model;
};

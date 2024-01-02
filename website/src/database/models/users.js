const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      avatar: DataTypes.STRING,
      user_type_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  Model.associate = (db) => {
    Model.belongsTo(db.User_type, {
      as: "user_type",
      foreignKey: "user_type_id",
    });

    Model.hasMany(db.Cart_shopping, {
      as: "cart_shopping",
      foreignKey: "user_id",
    });
  };

  return Model;
};

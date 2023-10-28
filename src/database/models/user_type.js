module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "User_type",
    {
      admin: DataTypes.INTEGER,
      buyer: DataTypes.INTEGER,
      employee: DataTypes.INTEGER,
    },
    {
      tableName: "user_type",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Orders, {
      as: "orders",
      foreignkey: "user_type_id",
    });
  };
  return Model;
};

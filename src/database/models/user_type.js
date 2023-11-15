module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "User_type",
    {
      name_user_type: DataTypes.STRING,
    },
    {
      tableName: "user_type",
      /*  createdAt: "created_at",
      updatedAt: "updated_at' */
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Orders, {
      as: "orders",
      foreignKey: "user_type_id",
    });
  };
  return Model;
};

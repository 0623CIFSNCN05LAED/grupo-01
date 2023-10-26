module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Users",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      login_id: DataTypes.INTEGER,
      avatar: DataTypes.STRING,
      user_type_id: DataTypes.INTEGER,
    },
    {
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Model;
};

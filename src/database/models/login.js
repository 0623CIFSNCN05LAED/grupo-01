module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Login",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "login",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Model;
};

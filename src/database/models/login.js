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
  Model.associate = (db) => {
    Model.hasMany(db.Users, {
      as: "users",
      foreignkey: "login_id",
    });
  };

  return Model;
};

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Type",
    {
      oferta: DataTypes.STRING,
      destacado: DataTypes.STRING,
    },
    {
      tableName: "type",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Model;
};

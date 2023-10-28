module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "size",
    {
      S: DataTypes.STRING,
      M: DataTypes.STRING,
      L: DataTypes.STRING,
      XL: DataTypes.STRING,
      XXL: DataTypes.STRING,
    },
    {
      tableName: "size",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsTo(db.Products, {
      as: "product",
      foreignkey: "size_id",
    });
  };
  return Model;
};

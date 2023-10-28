module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Type",
    {
      sale: DataTypes.STRING,
      feature: DataTypes.STRING,
    },
    {
      tableName: "type",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Products, {
      as: "products",
      through: "type_product",
      foreignkey: "type_id",
      otherkey: "product_id",
    });
  };
  return Model;
};

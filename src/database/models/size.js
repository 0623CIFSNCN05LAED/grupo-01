module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Size",
    {
      name_size: DataTypes.STRING,
    },
    {
      tableName: "size",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Products, {
      as: "products",
      through: "size_product",
      foreignKey: "size_id",
      otherKey: "product_id",
    });
  };
  return Model;
};

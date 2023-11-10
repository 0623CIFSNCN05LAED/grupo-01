module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Category",
    {
      name_category: DataTypes.STRING,
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Products, {
      as: "products",
      through: "products_category",
      foreignKey: "category_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };
  return Model;
};

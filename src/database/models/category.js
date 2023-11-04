module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Category",
    {
      men: DataTypes.STRING,
      women: DataTypes.STRING,
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Products, {
      as: "products",
      through: "aproducts_category",
      foreignKey: "category_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };
  return Model;
};

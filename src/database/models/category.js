module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Category",
    {
      men: DataTypes.STRING,
      women: DataTypes.STRING,
    },
    {
      tableName: "category",
      createdAt: "created_at",
      updatedAt: "updated_at",
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

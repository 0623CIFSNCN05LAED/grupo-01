module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Products",
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      category_products_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
    },
    {
      tableName: "products",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Products.associate = function (models) {
    Products.belongsTo(models.Category, {
      as: "category",
      foreignkey: "category_products_id",
    });
  };
  return Model;
};

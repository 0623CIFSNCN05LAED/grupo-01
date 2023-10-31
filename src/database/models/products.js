module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Products",
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
      color_id: DataTypes.INTEGER,
      size_id: DataTypes.INTEGER,
    },
    {
      tableName: "products",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Category, {
      as: "category",
      through: "products_category",
      foreignkey: "product_id",
      otherkey: "category_id",
    });
  };
  Model.associate = (db) => {
    Model.belongsToMany(db.Type, {
      as: "type",
      through: "type_product",
      foreignkey: "product_id",
      otherkey: "type_id",
    });
  };
  Model.associate = (db) => {
    Model.belongsToMany(db.Orders, {
      as: "orders",
      through: "Cart_shopping",
      foreignkey: "product_id",
      otherkey: "order_id",
    });
  };
  Model.associate = (db) => {
    Model.hasMany(db.Size, {
      as: "size",
      foreignkey: "size_id",
    });
  };
  return Model;
};

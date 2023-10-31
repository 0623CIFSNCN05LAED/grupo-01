module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Products",
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
    },
    {
      tableName: "products",
      /*  createdAt: "created_at",
      updatedAt: "updated_at", */
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.belongsToMany(db.Category, {
      as: "category",
      through: "products_category",
      foreignkey: "product_id",
      otherkey: "category_id",
    });

    Model.belongsToMany(db.Type, {
      as: "type",
      through: "type_product",
      foreignkey: "product_id",
      otherkey: "type_id",
    });

    Model.belongsToMany(db.Orders, {
      as: "orders",
      through: "Cart_shopping",
      foreignkey: "product_id",
      otherkey: "order_id",
    });

    Model.hasMany(db.Size, {
      as: "size",
      foreignkey: "size_id",
    });

    Model.hasMany(db.Color, {
      as: "color",
      foreignkey: "color_id",
    });
  };
  return Model;
};

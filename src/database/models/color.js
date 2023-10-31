module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Color",
    {
      name_size: DataTypes.STRING,
    },
    {
      tableName: "color",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Model.associate = (db) => {
    Model.belongsTo(db.Products, {
      as: "product",
      foreignkey: "color_id",
    });
  };
  return Model;
};

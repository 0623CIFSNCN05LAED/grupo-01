module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "size",
    {
      name_size: DataTypes.STRING,
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

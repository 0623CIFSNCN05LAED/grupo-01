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
    Model.hasMany(db.Products, {
      as: "products",
      foreignKey: "size_id",
    });
  };
  return Model;
};

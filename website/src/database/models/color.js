module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Color",
    {
      name_color: DataTypes.STRING,
    },
    {
      tableName: "color",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Products, {
      as: "product",
      foreignKey: "color_id",
    });
  };
  return Model;
};

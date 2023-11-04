module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Genres",
    {
      name: DataTypes.STRING,
    },
    {
      tableName: "genres",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Products, {
      as: "product",
      foreignKey: "genre_id",
    });
  };
  return Model;
};

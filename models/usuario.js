const Usuario = (sequelize, DataTypes) => {
  const model = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
  });

  model.associate = (models) => {
    model.hasMany(models.Tarea, { as: 'tareas' });
  };

  return model;
};

module.exports = Usuario;
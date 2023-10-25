const Tarea = (sequelize, DataTypes) => {
  const model = sequelize.define('Tarea', {
    nombre: DataTypes.STRING,
  });

  model.associate = (models) => {
    model.belongsTo(models.Usuario, { as: 'usuario' });
  };

  return model;
};

module.exports = Tarea;
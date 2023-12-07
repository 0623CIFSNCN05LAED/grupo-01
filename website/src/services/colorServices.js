const { Color } = require("../database/models");
const Sequelize = require("sequelize");
module.exports = {
  getAllColors: () => {
    return Color.findAll();
  },
};

const { Size } = require("../database/models");
const Sequelize = require("sequelize");
module.exports = {
  getAllSizes: () => {
    return Size.findAll();
  },
};

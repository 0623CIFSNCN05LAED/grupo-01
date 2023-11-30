const userServices = require("../../services/userService");
const Op = DB.sequelize.op;
const { Users } = require("../../database/models");
module.exports = {
  list: async (req, res) => {
    await Users.findAll({}).then((users) => {
      return res.json({
        total: users.length,
        data: users,
        status: 200,
      });
    });
    //res.render("lista-usuarios");
  },
  /* show: async (req, res) => {
    Users.findByPk(req.params.id).then((users) => {
      return res.status(200).json({
        data: users,
        status: 200,
      });
    });
  }, */
};
//////

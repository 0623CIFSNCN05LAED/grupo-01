const userServices = require("../../services/userService");

const { Users } = require("../../database/models");
module.exports = {
  list: async (req, res) => {
    const users = await userServices.getAllUsers();
    const arrayUsers = [];
    users.forEach((user) => {
      arrayUsers.push({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        avatar: user.avatar,
        email: user.email,
      });
    });

    return res.json({
      total: users.length,
      data: arrayUsers,
      status: 200,
    });
  },

  show: async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUser(id);
    const detailUser = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      avatar: user.avatar,
      email: user.email,
    };
    return res.status(200).json({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      data: detailUser,
    });
  },
};

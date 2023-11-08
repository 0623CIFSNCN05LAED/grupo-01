const db = require("../data/db");
const { Users } = require("../database/models/users");

const userServices = {
  getAllUsers: () => {
    return db.users.findAll();
  },
  getUser: (id) => {
    return db.users.findById(id);
  },
  findByEmail: async (email, text) => {
    const usuario = await Users.findAll({
      where: { email: email },
      //include: [{ model: User }],
    });
    if (usuario == null) {
      userServices.createUser(user);
    }
  },
  createUser: async (user) => {
    return await Users.create({
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      avatar: user.avatar,
      user_type_id: user.user_type_id,
      email: user.email,
      password: user.password,
    });
  },
  updateUser: (id, user) => {
    db.users.update(id, user);
  },
  deleteUser: (id) => {
    const { avatar } = db.users.findById(id);
    db.users.deleteImage(avatar);
    db.users.delete(id);
  },
};

module.exports = userServices;

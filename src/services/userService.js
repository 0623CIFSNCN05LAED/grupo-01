const db = require("../data/db");
const { Users } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const userServices = {
  getAllUsers: () => {
    return Users.findAll();
  },
  getUser: async (id) => {
    return Users.findByPk(id, { include: ["user_type"] });
  },
  findByEmail: async (email) => {
    if (!email) {
      console.error("Email no proporcionado");
      return null;
    }
    const usuario = await Users.findOne({
      where: { email },
      //include: [{ model: User_type, as: "user_type" }], // Asegúrate de incluir el modelo User_type
    });
    return usuario;
  },
  createUser: async (user) => {
    return await Users.create({
      id: uuidv4(),
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      avatar: user.avatar,
      user_type_id: user.user_type_id,
      email: user.email,
      password: user.password,
    });
  },

  updateUser: async (id, user) => {
    return Users.update(
      {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        avatar: user.avatar,
        email: user.email,
      },
      { where: { id: id } }
    );
  },
  deleteUser: async (id) => {
    const { avatar } = Users.findById(id);
    await Users.deleteImage(avatar);
    await Users.delete(id);
  },
};

module.exports = userServices;

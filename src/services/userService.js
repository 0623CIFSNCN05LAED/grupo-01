const db = require("../data/db");
const Model = require("../database/models");

const userServices = {
  getAllUsers: () => {
    return db.users.findAll();
  },
  getUser: (id) => {
    return db.users.findById(id);
  },
  findByEmail: (email, text) => {
    return db.users.findByField(email, text);
  },
  createUser: (user) => {
    return db.users.create(user);
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

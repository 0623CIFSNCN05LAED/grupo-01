const db = require("../data/db");

const userServices = {
  getAllUsers: () => {
    return db.users.findAll();
  },
  getUser: (id) => {
    return db.users.findById(id);
  },
  findByEmail: (email,text) => {
    return db.users.findByField(email,text);
  },
  createUser: (user) => {
    db.users.create(user);
  },
  updateUser: (id,user) => {
    db.users.update(id,user);
  },
  deleteUser: (id) => {
    db.users.delete(id);
  }
}
  
module.exports = userServices;
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getUsers: function () {
    const usersFilePath = path.join(__dirname, "./users.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    return users;
  },
  saveUser: function (users) {
    const usersFilePath = path.join(__dirname, "./users.json");
    fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2));
  },
  findAll: function () {
    return this.getUsers();
  },
  findById: function (id) {
    const user = this.getUsers().find((user) => user.id == id);
    return user;
  },
  findByField: function (field,text) {
    let allUsers = this.findAll();
    let userObtain = allUsers.find(user => user[field] === text);
    return userObtain;
  },
  create: function (user) {
    const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      ...user,
    }
    users.push(newUser);
    this.saveUser(users);
  },
  update: function (id, user) {
    //cargo todos los usuarios
    const users = this.getUsers();
    //busco un usuario por su id
    const editUser =  users.find((user) => user.id == id);
    //piso todas sus propiedades
    //Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
    Object.assign(editUser,user);
    //guardo los usuarios
    this.saveUser(users);
  },
  delete : function (id) {
    //cargo todos los usuarios
    const users = this.getUsers();
    //Devuelde todos los users menos 1
    const notEliminated = users.filter(user => user.id !== id);
    //Guardo los usuarios que se filtraron 
    this.saveUser(notEliminated);
  }
};
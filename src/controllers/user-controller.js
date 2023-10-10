const { json } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { type, userInfo } = require("os");

const controller = {
  index: (req, res) => {
    res.render();
  },
  register: (req, res) => {
    // Extract user information from the form
    const name = req.body.nombreapellido;
    const phone = req.body.telefono;
    const email = req.body.email;
    const password = req.body.contrasena;
    const repassword = req.body.repcontrasena;

    // Save user information in a JSON file
    if (password === repassword) {
      const user = { id: uuidv4(), name, email, password, phone };
      fs.appendFile(
        "src/data/users/users.json",
        JSON.stringify(user, null, 2) + "\n",
        (err) => {
          if (err) throw err;
          console.log("The file has been saved.");
        }
      );
      res.redirect("/");
    } else {
      res.redirect("/register");
    }
  },
  login: (req, res) => {
    // usando datos de users.json
    const users = JSON.parse(
      fs.readFileSync("src/data/users/users.json", "utf-8")
    );
    console.log(users);
    // datos del login
    const email = req.body.email;
    const password = req.body.password;
    console.log(typeof email);
    console.log(typeof password);
    // comprobando que el email exista
    const user = users.find((user) => user.email === email);
    // chequeando password
    if (user && user.password === password) {
      res.redirect("/");
      console.log("login exitoso");
    } else {
      res.redirect("/login");
      console.log("algo mal");
    }
  },
  profileUser: (req, res) => {
    res.render("../views/user-profile.ejs");
  },
  profileAdmin: (req, res) => {
    res.render("../views/admin-profile.ejs");
  },
  deleteUser: (req, res) => {
    res.render();
  },
};

module.exports = controller;

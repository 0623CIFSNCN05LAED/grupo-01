const userService = require("../services/userService");
const { type, userInfo } = require("os");

const controller = {
  index: (req, res) => {
    res.render();
  },
  show: (req,res)=>{
    //Vista del formulario de registro
    res.render("register");
  },
  register: (req, res) => {
    //Capturo la información del newUser del formulario
    console.log(req.body);
    const user = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      phone : req.body.phone,
      email : req.body.email,
      password : req.body.password,
      repassword : req.body.password_re,
      avatar: req.file ? req.file.filename : "default.png"
    };
    //Verifico si este email se encuetra en DDBB
    let checkUser = userService.findByEmail('email',req.body.email);
    if (checkUser) {
      return res.send('Este email ya esta registrado');
      // return res.render("/users/register");
    }
    if (user.password !== user.repassword) {
      return res.redirect("/users/register");
    } else {
      userService.createUser(user);
      return res.redirect("/users/login");
    }
  },
  login: (req, res) => {
    res.render("login")
  },
  profileUser: (req, res) => {
    res.render("user-profile");
  },
  deleteUser: (req, res) => {
    res.render();
  },
};

module.exports = controller;

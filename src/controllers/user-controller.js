const userService = require("../services/userService");
const bcrypt = require("bcryptjs");
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
      password : bcrypt.hashSync(req.body.password, 10),
      avatar: req.file ? req.file.filename : "default.png"
    };
    //Verifico si este email se encuetra en DDBB
    let checkUser = userService.findByEmail('email',req.body.email);
    if (checkUser) {
      console.log(checkUser)
      return res.send(
        "Este email ya esta registrado"
      );
    } else if (req.body.password != req.body.password_re) {
      return res.send(
        "Las contraseñas no coinciden"
      );
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.redirect("/users/register");
    } else {
      userService.createUser(user);
      return res.redirect("/users/login");
    }
  },
   login: (req,res)=>{
    //Vista del formulario del login
    res.render("login"); 
   },
  accessLogin: (req, res) => {
    //Verifico si este email se encuetra en DDBB
    const checkUser = userService.findByEmail('email',req.body.email);
    const checkPwd = bcrypt.compareSync(req.body.password,checkUser.password);
    if (!checkUser) {
      return res.send('Este email no se encuentra registrado');
    } else if (!checkPwd) {
      return res.send('Los datos son incorrectos. Verifique y vuelva a intentar')
    }
    if (checkUser && checkPwd) {
      return res.redirect('user-profile')
    }
  },
  profileUser: (req, res) => {
    // Vista de formulario del usuario perfil
    res.render("user-profile");
  },
  updateUserData:(req,res) => {

  },
  deleteUser: (req, res) => {
    res.render();
  },
};

module.exports = controller;

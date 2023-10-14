const userService = require("../services/userService");
const userID = require("../data/users/users");
const bcrypt = require("bcryptjs");
// const { type, userInfo } = require("os");

const controller = {
  index: (req, res) => {
    res.render();
  },
  show: (req, res) => {
    //Flash errors
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    //Vista del formulario de registro
    res.render("register", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  register: (req, res) => {
    //Capturo la información del newUser del formulario
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file ? req.file.filename : "default.png",
    };
    //Verifico si este email se encuetra en DDBB
    let checkUser = userService.findByEmail("email", req.body.email);
    if (checkUser) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Este email se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    } else if (req.body.password != req.body.password_re) {
      return res.render("register", {
        errors: {
          password_re: {
            msg: "Las contraseñas no coinciden",
          },
        },
        oldData: req.body,
      });
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.redirect("/users/register");
    } else {
      userService.createUser(user);
      return res.redirect("/users/login");
    }
  },
  login: (req, res) => {
    //Flash errors
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    //Vista del formulario del login
    res.render("login", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  accessLogin: (req, res) => {
    //Verifico si este email se encuetra en DDBB
    const findUser = userService.findByEmail("email", req.body.email);
    if (!findUser) {
      return res.render("login", {
        errors: {
          email: {
            msg: "Este email no se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    }
    if (req.body.recordame != undefined) {
      res.cookie("recordame", req.body.email, { maxAge: 120000 });
    }
    // Verifico que la password (DDBB) corresponda con la que viene por request
    const checkPwd = bcrypt.compareSync(req.body.password, findUser.password);
    if (!checkPwd) {
      return res.render("login", {
        errors: {
          email: {
            msg: "Los datos son incorrectos. Verifique y vuelva a intentar",
          },
        },
        oldData: req.body,
      });
    } else {
      req.session.usuario = findUser;
      return res.redirect("user-profile");
    }
  },
  logout: (req, res) => {
    res.clearCookie("recordame");
    req.session.destroy();
    return res.redirect("/");
  },
  profileAdmin: (req, res) => {
    res.render("admin-profile");
  },
  profileUser: (req, res) => {
    // Vista de formulario del usuario perfil
    res.render("user-profile");
  },
  updateUserData: (req, res) => {},
  deleteUser: (req, res) => {
    res.render();
  },
  upload: (req, res) => {
    const user = req.session.usuario;
    const image = req.file ? req.file.filename : user.avatar;
    user.avatar = image;
  },
};

module.exports = controller;

const userService = require("../services/userService");
const userID = require("../data/users/users");
const bcrypt = require("bcryptjs");
// const { type, userInfo } = require("os");
const fs = require("fs");
const upload = require("../middleware/multerUserMiddleware");
const { Users } = require("../database/models/users");

const controller = {
    const users = await userService.getAllUsers();
    res.render('users', { users });
    console.log({ users })
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
  register: async (req, res) => {
    //Capturo la información del newUser del formulario
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      avatar: req.file ? req.file.filename : "default.png",
      user_type_id: 0,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      password_re: req.body.password,
    };
    //Verifico si este email se encuetra en DDBB
    console.log("Email antes de findByEmail:", req.body.email);
    if (req.body.email.endsWith("@maunganui.com")) {
      user.user_type_id = 1;
    } else {
      user.user_type_id = 2;
    }
    const checkUser = await userService.findByEmail(req.body.email);
    if (checkUser) {
      return res.redirect("register", {
        errors: {
          email: {
            msg: "Este email se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    } else if (req.body.password !== req.body.password_re) {
      return res.redirect("register", {
        errors: {
          password_re: {
            msg: "Las contraseñas no coinciden",
          },
        },
        oldData: req.body,
      });
    } else {
      await userService.createUser(user);
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
  accessLogin: async (req, res) => {
    //Verifico si este email se encuetra en DDBB
    const findUser = await userService.findByEmail(req.body.email);
    console.log(findUser);
    if (!findUser) {
      return res.redirect("login", {
        errors: {
          email: {
            msg: "Este email no se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    }
    if (req.body.recordame != undefined) {
      res.cookie("recordame", req.body.email, { maxAge: 1000 * 60 * 60 });
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
      return res.redirect("/users/user-profile/" + findUser.id);
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
  profileUser: async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
    // Vista de formulario del usuario perfil
    res.render("user-profile", { user });
  },
  updateUserData: async (req, res) => {
    const updateFullName = req.body;
    const id = req.params.id;
    await userService.updateUser(id, updateFullName);
    res.redirect("/users/user-profile/" + id);
  },
  deleteUser: (req, res) => {
    res.render();
  },
  upload: async (req, res) => {
    const avatar = req.body;
    const id = req.params.id;
    const uploadImage = req.file
      ? req.file.filename
      : userService.getUser(id).avatar;
    // req.session.usuario.avatar = image.filename;
    avatar.avatar = uploadImage;
    await userService.updateUser(id, avatar);
    res.redirect("/users/user-profile/" + id);
  },
};

module.exports = controller;

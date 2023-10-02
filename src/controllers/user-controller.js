const userService = require("../services/userService");
const { type, userInfo } = require("os");

const controller = {
  index: (req, res) => {
    res.render();
  },
  show: (req,res)=>{
    res.render("register");
  },
  register: (req, res) => {
    // Extract user information from the form
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
    // Save user information in a JSON file
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
    res.render("../views/user-profile.ejs");
  },
  deleteUser: (req, res) => {
    res.render();
  },
};

module.exports = controller;

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const controller = {
    index: (req,res) =>{
        res.render();
    },
    register: (req,res) =>{
        // Extract user information from the form
    const name = req.body.nombreapellido;
    const phone = req.body.telefono;
    const email = req.body.email;
    const password = req.body.contrasena;
    const repassword = req.body.repcontrasena;

    // Save user information in a JSON file
    if (password === repassword) {
      const user = {id: uuidv4(), name, email, password, phone };
      fs.appendFile("src/data/users/users.json", JSON.stringify(user, null, 2) + "\n" ,(err) => {
      if (err) throw err;
      console.log('The file has been saved.');
      });
      res.send(user);
    } else {
      res.redirect("/register");
    };
  },
    login: (req,res) =>{
        res.render();
    },
    profileUser: (req,res) =>{
        res.render();
    },
    deleteUser: (req,res) =>{
        res.render();
    }
};

module.exports = controller;
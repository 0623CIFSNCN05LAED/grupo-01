// ************ Require's ************
const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const router = Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/users"),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({
    storage: storage,
  });

// ************ Controller Require ************
const userController = require("../controllers/user-controller");

// *************** Get a List of All Users ***************
router.get("/", userController.index);

// ************ User Registration Form ************
router.get("/register", userController.show); //Formulario de registro
router.post("/register",userController.register); //Acción de creación (donde se envía el formulario)

// **************** User Login Form ****************
router.get("/login", userController.login); //Formulario de LOGIN


// ************** User Profile Form ****************
router.get("/profile/:id", userController.profileUser); //Perfil de Usuario

// ************** Password Reset Form ****************
router.get("/profile/:id", userController.profileUser); //Formulario de Cambio de Contraseña

// ************** Delete one user ******************
router.delete("/:id", userController.deleteUser); //Ación de borrado


module.exports = router;

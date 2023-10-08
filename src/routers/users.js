// ************ Require's ************
const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const router = Router();
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

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
router.get("/register", guestMiddleware, userController.show); //Formulario de registro
router.post("/register", userController.register); //Acción de creación (donde se envía el formulario)

// **************** User Login Form ****************
router.get("/login", guestMiddleware, userController.login); //Formulario de LOGIN
router.post("/login", userController.accessLogin); // Acción para acceder a la cuenta
router.get("/check", function (req, res) {
  if (req.session.usuario == undefined) {
    res.send("no esta logueado");
  } else {
    res.send("usuario logueado " + req.session.usuario);
    console.log(req.session.usuario);
  }
});
router.get("/logout/", userController.logout);
// ************** User Profile Form ****************
router.get("/user-profile", authMiddleware, userController.profileUser); //Perfil de Usuario

// ************** Password Change Form ****************
router.get("/profile/:id", userController.profileUser); //Formulario de Cambio de Contraseña

// ************** Password Reset Form ****************
router.get("/forgot-password", userController.profileUser); // Formulario de reset de contraseña

// ************** Delete one user ******************
router.delete("/:id", userController.deleteUser); //Ación de borrado

module.exports = router;

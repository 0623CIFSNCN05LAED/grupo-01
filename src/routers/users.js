// ************ Require's ************
const { Router } = require("express");
const router = Router();
const upload = require("../middleware/multerUserMiddleware");
const validateRegister = require("../middleware/validate-register");
const validationsRegister = require("../validations/register");
const validateLogin = require("../middleware/validate-login");
const validationsLogin = require("../validations/login");
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

// ************ Controller Require ************
const userController = require("../controllers/user-controller");

// *************** Get a List of All Users ***************
router.get("/", userController.index);

// ************ User Registration Form ************
router.get("/register", guestMiddleware, userController.show); //Formulario de registro
router.post(
  "/register",
  validationsRegister,
  validateRegister,
  userController.register
); //Acción de creación (donde se envía el formulario)

// **************** User Login Form ****************
router.get("/login", guestMiddleware, userController.login); //Formulario de LOGIN
router.post(
  "/login",
  validationsLogin,
  validateLogin,
  userController.accessLogin
); // Acción para acceder a la cuenta
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

// ************** User Password Change Form ****************
router.get("/profile/:id", userController.profileUser); //Formulario de Cambio de Contraseña

// ************** User Profile Form ****************
router.get("/admin-profile", userController.profileAdmin); //Perfil de Admin

// ************** Admin Password Change Form ****************
router.get("/profile/:id", userController.profileUser); //Formulario de Cambio de Contraseña
router.post("/upload", upload.single("avatar"), userController.upload);
// ************** Password Reset Form ****************
router.get("/forgot-password", userController.profileUser); // Formulario de reset de contraseña

// ************** Delete one user ******************
router.delete("/:id", userController.deleteUser); //Ación de borrado

module.exports = router;

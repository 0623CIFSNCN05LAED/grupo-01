// ************ Require's ************
const { Router } = require("express");
const router = Router();
const upload = require("../middleware/multerUserMiddleware");
const validateRegister = require("../middleware/validate-register");
//const validationsRegister = require("../validations/register");
const validateLogin = require("../middleware/validate-login");
const validationsLogin = require("../validations/login");
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
// ************ Controller Require ************
const userController = require("../controllers/user-controller");

// *************** Get a List of All Users ***************
router.get("/", userController.index);

// ************ User Registration Form ************
router.get("/register", guestMiddleware, userController.show); //Formulario de registro
router.post("/register", validateRegister, userController.register); //Acción de creación (donde se envía el formulario)

// **************** User Login Form ****************
router.get("/login", guestMiddleware, userController.login); //Formulario de LOGIN
router.post(
  "/login",
  validationsLogin,
  validateLogin,
  userController.accessLogin
); // Acción para acceder a la cuenta
router.get("/logout/", userController.logout);
// ************** User Profile Form ****************
router.get("/user-profile/:id", authMiddleware, userController.profileUser); //Perfil de Usuario
router.put(
  "/user-profile/:id",
  upload.single("avatar"),
  authMiddleware,
  userController.upload
);
router.put("/user-profile/:id", authMiddleware, userController.updateUserData);

// ************** User Password Change Form ****************
router.get("/profile/:id", userController.profileUser); //Formulario de Cambio de Contraseña

// ************** User Profile Form ****************
router.get("/admin-profile", adminMiddleware, userController.profileAdmin); //Perfil de Admin

// ************** Password Reset Form ****************
router.get("/forgot-password", userController.profileUser); // Formulario de reset de contraseña

// ************** Delete one user ******************
router.delete("/:id", userController.deleteUser); //Ación de borrado

module.exports = router;

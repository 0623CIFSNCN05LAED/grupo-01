const { body } = require("express-validator");

module.exports = [
    body("email")
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debe ser un email válido"),
    body("password")
        .notEmpty()
        .withMessage("Debe completar este campo"),
];
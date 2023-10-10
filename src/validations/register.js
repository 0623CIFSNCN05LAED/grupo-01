const { body } = require("express-validator");

module.exports = [
    body("first_name")
        .notEmpty()
        .withMessage("Debe completar este campo"),
    body("last_name")
        .notEmpty()
        .withMessage("Debe completar este campo"),
    body("phone")
        .optional()
        .isString(),
    body("email")
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .normalizeEmail()
        .withMessage("Debe ser un email válido"),
    body("password")
        .notEmpty()
        .withMessage("Por favor ingrese a contraseña valida")
        .isLength({min:6})
        .withMessage("La contraseña mínimo debe ser 6 carácteres")
        .isLength({max:10})
        .withMessage("La contraseña máximo debe ser 10 carácteres")
        .matches(/[A-Z]/g)
        .withMessage("La contraseña debe contener una letra mayúscula")
        .matches(/[a-z]/g)
        .withMessage("La contraseña debe contener una letra minúscula")
        .matches(/[0-9]/g)
        .withMessage("La contraseña debe contener un número")
        .not()
        .matches(/\s/g)
        .withMessage("Por favor no utilice caracteres de espacio.")
        .custom((value, { req }) => {
            if (value !== req.body.password_re) {
              throw new Error("La confirmación de contraseña no coincide con la contraseña");
            }
            return true;
        }),
    body("password_re")
        .notEmpty()
        .withMessage("Por favor ingrese a contraseña valida")
        .isLength({min:6})
        .withMessage("La contraseña mínimo debe ser 6 carácteres")
        .isLength({max:10})
        .withMessage("La contraseña máximo debe ser 10 carácteres")
        .matches(/[A-Z]/g)
        .withMessage("La contraseña debe contener una letra mayúscula")
        .matches(/[a-z]/g)
        .withMessage("La contraseña debe contener una letra minúscula")
        .matches(/[0-9]/g)
        .withMessage("La contraseña debe contener un número")
        .not()
        .matches(/\s/g)
        .withMessage("Por favor no utilice caracteres de espacio."),
    // body("avatar")
];
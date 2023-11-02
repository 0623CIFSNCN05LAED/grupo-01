const User = require("../services/userService");
const Model = require("../database/models");
function logueadoMiddleware(req, res, next) {
  res.locals.logueado = false;

  const emailCookie = req.cookies.recordame;
  const userCookie = User.findByEmail("email", emailCookie);

  if (userCookie != undefined) {
    res.locals.logueado = userCookie;
  }

  if (req.session.usuario != undefined) {
    res.locals.logueado = true;
    res.locals.logueado = req.session.usuario;
  }
  next();
}

module.exports = logueadoMiddleware;

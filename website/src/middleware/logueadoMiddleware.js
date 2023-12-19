const User = require("../services/userService");
const { Model } = require("../database/models/users");

async function logueadoMiddleware(req, res, next) {
  res.locals.logueado = false;

  const emailCookie = req.cookies.recordame;
  const userCookie = await User.findByEmail(emailCookie);

  if (req.session.usuario) {
    res.locals.logueado = req.session.usuario;
  } else if (userCookie) {
    res.locals.logueado = userCookie;
  }

  next();
}

module.exports = logueadoMiddleware;

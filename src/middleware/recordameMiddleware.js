const userServices = require("../services/userService");

function recordameMiddleware(req, res, next) {
  next();
  if (res.cookie.recordame != undefined && req.session.usuario == undefined) {
    const usuarioLogueado = userServices.findByEmail(
      "email",
      req.session.usuario.email
    );
  }
  req.session.usuario = usuario;
}

module.exports = recordameMiddleware;
function authMiddleware(req, res, next) {
  if (req.session.usuario == undefined) {
    res.redirect("/users/login");
  }
  next();
}

module.exports = authMiddleware;
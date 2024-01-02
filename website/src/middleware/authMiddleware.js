function authMiddleware(req, res, next) {
  if (req.session.usuario == undefined) {
    return res.redirect("/users/login");
  }
  next();
}

module.exports = authMiddleware;

function guestMiddleware(req, res, next) {
  if (req.session.usuario != undefined) {
    res.redirect("/users/user-profile/"+ req.session.usuario.id);
  }
  next();
}

module.exports = guestMiddleware;
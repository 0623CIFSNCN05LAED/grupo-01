function guestMiddleware(req, res, next) {
  if (req.session.usuario && req.session.usuario.user_type_id) {
    if (req.session.usuario.user_type_id == 1) {
      return res.redirect("/users/admin-profile/" + req.session.usuario.id);
    } else {
      return res.redirect("/users/user-profile/" + req.session.usuario.id);
    }
  }
  return next();
}

module.exports = guestMiddleware;

/* function adminMiddleware(req, res, next) {
  if (req.session.usuario.user_type_id != 1) {
    res.redirect("/users/user-profile/" + req.session.usuario.id);
  }
}

module.exports = adminMiddleware; */

function adminMiddleware(req, res, next) {
  if (req.session.usuario && req.session.usuario.user_type_id != 1) {
    res.redirect("/users/user-profile/" + req.session.usuario.id);
  } else {
    next();
  }
}

module.exports = adminMiddleware;

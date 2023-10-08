function guestMiddleware(req, res, next) {
  if (req.session.usuario != undefined) {
    res.redirect("/users/user-profile");
  }

  next();
}

module.exports = guestMiddleware;

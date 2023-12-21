const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.session.errors = errors.mapped();
    req.session.oldData = req.body;
    console.log(errors);
    res.redirect("/users/login");
  } else {
    next();
  }
};

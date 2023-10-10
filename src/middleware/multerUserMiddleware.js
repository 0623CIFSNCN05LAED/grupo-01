const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/users"),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
});
const upload = multer({
    storage: storage,
});

module.exports = upload;
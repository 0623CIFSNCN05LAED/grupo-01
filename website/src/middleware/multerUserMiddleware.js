const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../../public/images/users");
    callback(null, folder);
  },
  filename: function (req, file, callback) {
    const imageName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    callback(null, imageName);
  },
});
const upload = multer({
  storage: storage,
});

module.exports = upload;

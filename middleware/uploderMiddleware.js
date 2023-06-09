const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "db");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 10485760 },
}).single("file");

module.exports = upload;

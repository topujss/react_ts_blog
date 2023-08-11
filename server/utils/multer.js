const multer = require('multer');

// create disk storage for picture
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, 'server/public/img');
  },
});

// single photo middleware function
const postMulter = multer({ storage }).single('post_photo');
module.exports = postMulter;

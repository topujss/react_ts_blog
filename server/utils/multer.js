const multer = require('multer');

// create disk storage for picture
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.file);
    cb(null, 'server/public/img');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

// single photo middleware function
const postMulter = multer({ storage }).single('post_photo');
module.exports = postMulter;

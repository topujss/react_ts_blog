import multer, { diskStorage } from 'multer';

// create disk storage for picture
const storage = diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, 'public/img');
  },
});

// single photo middleware function
export const profileMulter = multer({ storage }).single('profile_photo');

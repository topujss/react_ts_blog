const { createPost, getAllPost, getSinglePost, delPost, updatePost } = require('../controllers/post');
const postMulter = require('../utils/multer');

const router = require('express').Router();

// routing
router.route('/').post(postMulter, createPost).get(getAllPost);
router.route('/:id').get(getSinglePost).delete(delPost).patch(updatePost);

// export
module.exports = router;

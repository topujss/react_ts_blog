const { getAllCategory, createCategory, delCategory, editCategory } = require('../controllers/category');

const router = require('express').Router();

// routing
router.route('/').post(createCategory).get(getAllCategory);
router.route('/:id').delete(delCategory).patch(editCategory);

// export
module.exports = router;

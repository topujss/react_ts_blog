const { getSingleUser, updateSingleUser, deleteSingleUser, getAllUser } = require('../controllers/user');

const router = require('express').Router();

// routing
router.route('/').get(getAllUser);
router.route('/:id').get(getSingleUser).patch(updateSingleUser).delete(deleteSingleUser);

// export
module.exports = router;

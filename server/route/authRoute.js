const { registerUser, loginUser } = require('../controllers/auth');

const router = require('express').Router();

// routing
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

// export
module.exports = router;

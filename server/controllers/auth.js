const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');

/**
 * @function registerUser
 * @desc User registation
 * @route POST api/v1/auth/register
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // validate when user post
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  // hash the password before sending
  const passHash = await bcrypt.hash(password, 10);

  const newUser = await User.create({ username, email, password: passHash });

  res.status(200).json({ message: 'Register user created', newUser });
});

/**
 * @function loginUser
 * @desc User login after registation
 * @route POST api/v1/auth/login
 */
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check if same user exist by find username
  const userExist = await User.findOne({ username });
  if (!userExist) {
    return res.status(400).json({ message: 'Try new username' });
  }

  const validated = await bcrypt.compare(password, userExist.password);
  if (!validated) {
    return res.status(400).json(`User password not match!`);
  }

  res.status(200).json({ message: 'User successfully loggedin', validated });
});

module.exports = { registerUser, loginUser };

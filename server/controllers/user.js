const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');

/**
 * @param id
 * @function getSingleUser
 * @desc user login feature
 * @route POST api/v1/user/:id
 */
const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getUser = await User.findById(id).select('-password');

  // validate when no user found
  if (!getUser) {
    return res.status(400).json({ message: 'no user found' });
  }

  res.status(200).json({ message: 'Got single user', getUser });
});

/**
 * @param id
 * @function updateSingleUser
 * @desc user update feature
 * @route PUT api/v1/user/:id
 */
const updateSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, password, email, username } = req.body;

  if (userId === id) {
    // validate after getting them
    if (!username || !email || !password) {
      return res.status(200).json({ message: 'no data found to update' });
    }

    // Make password hash before send database
    const passHash = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(id, { username, email, password: passHash }, { new: true });

    res.status(200).json({ message: 'Successfully updated single user', updatedUser });
  }
});

/**
 * @param id
 * @function deleteSingleUser
 * @desc user delete feature
 * @route DELETE api/v1/user/:id
 */
const deleteSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (userId === id) {
    const modelUser = await User.findById(id);
    await Post.deleteMany({ username: modelUser.username });
    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({ message: 'Successfully deleted single user', deletedUser });
  }
});

module.exports = { getSingleUser, updateSingleUser, deleteSingleUser };

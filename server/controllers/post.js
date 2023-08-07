const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

/**
 * @function createPost
 * @desc creating post with data
 * @route POST api/v1/post/
 */
const createPost = asyncHandler(async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // send those that came from body to database
  const newPost = new Post(req.body);

  // save after everything is done
  const savedPost = await newPost.save();

  res.status(200).json({ message: 'post Successfully created', savedPost });
});

/**
 * @function getAllPost
 * @desc creating post with data
 * @route GET api/v1/post/
 */
const getAllPost = asyncHandler(async (req, res) => {
  // get query data
  const { user, cat } = req.params;

  let postData;
  if (user) {
    postData = await Post.find({ username });
  } else if (cat) {
    postData = await Post.find({ categories: { $in: [cat] } });
  } else {
    postData = await Post.find();
  }

  res.status(200).json({ message: 'Got all data', postData });
});

/**
 * @param id
 * @function getSinglePost
 * @desc you can get single post
 * @route GET api/v1/post/:id
 */
const getSinglePost = asyncHandler(async (req, res) => {
  // get params data
  const { id } = req.params;

  const getSingle = await Post.findById(id);

  res.status(200).json({ message: 'Got single data', getSingle });
});

/**
 * @param id
 * @function delPost
 * @desc you can delete single post
 * @route DELETE api/v1/post/:id
 */
const delPost = asyncHandler(async (req, res) => {
  // get params data
  const { id } = req.params;

  const deletedSingle = await Post.findByIdAndDelete(id);

  res.status(200).json({ message: 'deleted single data', deletedSingle });
});

/**
 * @param id
 * @function updatePost
 * @desc you will get to update single post
 * @route DELETE api/v1/post/:id
 */
const updatePost = asyncHandler(async (req, res) => {
  // get params data
  const { id } = req.params;

  const updateSingle = await Post.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );

  res.status(200).json({ message: 'updated single data', updateSingle });
});

module.exports = { createPost, getAllPost, getSinglePost, delPost, updatePost };

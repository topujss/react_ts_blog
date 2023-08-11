const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

/**
 * @function createPost
 * @desc creating post with data
 * @route POST api/v1/post/
 */
const createPost = asyncHandler(async (req, res) => {
  const { username, title, desc } = req.body;

  if (!username || !title || !desc) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  console.log(req.file.filename);

  // send those that came from body to database
  const newPost = await Post.create({
    username,
    title,
    desc,
    photo: req.file.filename,
  });

  res.status(200).json({ message: 'post Successfully created', newPost });
});

/**
 * @function getAllPost
 * @desc creating post with data
 * @route GET api/v1/post/
 */
const getAllPost = asyncHandler(async (req, res) => {
  // get query data
  const { username, cat } = req.query;

  let postData;
  if (username) {
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
  const { username } = req.body;
  const postData = await Post.findById(id);

  if (postData.username === username) {
    const deletedSingle = await Post.findByIdAndDelete(id);
    res.status(200).json({ message: 'deleted single data', deletedSingle });
  } else {
    res.status(400).json({ message: 'username not matched' });
  }
});

/**
 * @param id
 * @function updatePost
 * @desc you will get to update single post
 * @route PATCH api/v1/post/:id
 */
const updatePost = asyncHandler(async (req, res) => {
  // get params data
  const { id } = req.params;
  const { username } = req.body;
  const postData = await Post.findById(id);

  // if post username is same then update
  if (postData.username === username) {
    const updateSingle = await Post.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ message: 'updated single data', updateSingle });
  } else {
    res.status(400).json({ message: 'username not matched' });
  }
});

module.exports = { createPost, getAllPost, getSinglePost, delPost, updatePost };

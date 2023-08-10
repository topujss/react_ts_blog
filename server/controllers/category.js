const asyncHandler = require('express-async-handler');
const Category = require('../models/Category');

/**
 * @function getAllCategory
 * @desc you will get to create category
 * @route GET api/v1/category/
 */
const getAllCategory = asyncHandler(async (req, res) => {
  const getCat = await Category.find();
  res.status(200).json({ message: 'Got all category data', getCat });
});

/**
 * @function createCategory
 * @desc you will get to create category
 * @route POST api/v1/category/
 */
const createCategory = asyncHandler(async (req, res) => {
  // get body data
  const { name } = req.body;
  !name && res.status(400).json({ message: 'Name is requied' });

  //  Check if category exists
  const catCheck = await Category.findOne({ name });
  if (catCheck) {
    return res.status(400).json({ message: 'Category already exists' });
  }

  const createCat = await Category.create({ name });
  res.status(200).json({ message: 'created single data', createCat });
});

/**
 * @param id
 * @function editCategory
 * @desc you will get to edit single category
 * @route PATCH api/v1/category/:id
 */
const editCategory = asyncHandler(async (req, res) => {
  // get body data
  const { id } = req.params;
  const { name } = req.body;

  // check if category exists
  const catCheck = await Category.findOne({ name });
  if (catCheck) {
    return res.status(200).json({ message: 'Category already exists' });
  }

  const editCat = await Category.findByIdAndUpdate(id, { name }, { new: true });
  res.status(200).json({ message: 'edited single category', editCat });
});

/**
 * @param id
 * @function delCategory
 * @desc you will get to delete single category
 * @route DELETE api/v1/category/:id
 */
const delCategory = asyncHandler(async (req, res) => {
  // get body data
  const { id } = req.params;

  const delCat = await Category.findByIdAndDelete(id);
  res.status(200).json({ message: 'deleted single category', delCat });
});

module.exports = { createCategory, getAllCategory, delCategory, editCategory };

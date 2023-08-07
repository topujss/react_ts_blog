const { Schema, model } = require('mongoose');

const postSchema = Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
    },
    photo: {
      type: String,
      default: null,
    },
    username: {
      type: String,
    },
    categories: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Post', postSchema);

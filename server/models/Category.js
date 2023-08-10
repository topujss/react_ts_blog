const { Schema, model } = require('mongoose');

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Category', CategorySchema);

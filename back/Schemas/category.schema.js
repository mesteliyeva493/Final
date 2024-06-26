const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true,}
)

module.exports = CategorySchema;
const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true,}
)

module.exports = tagsSchema;
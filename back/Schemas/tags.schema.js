const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema(
  {
    title: String,
    products:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }]
  },
  { timestamps: true,}
)

module.exports = tagsSchema;
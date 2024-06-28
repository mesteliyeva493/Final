const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   img: String,
   name: String,
   title: String,
   description: String,
   price: Number,
   category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category'
   },
   tags: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tags'
   }]
}, { timestamps: true })

module.exports = ProductSchema
const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
   img: String,
   name: String,
   title: String,
   describtion: String,
   price: Number,
   // categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Productsone' },
   // tags:[]
}, { timestamps: true })

module.exports = ProductSchema
const mongoose = require('mongoose')


const ProductSchema=new mongoose.Schema({
   img:String,
   name:String,
   title:String,
   describtion:String,
   price:Number,
   // category:[],
   // tags:[]
},{timestamps:true})

module.exports=ProductSchema
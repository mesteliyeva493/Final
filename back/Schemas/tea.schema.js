const mongoose = require('mongoose')


const TeaSchema=new mongoose.Schema({
   img:String,
   name:String,
   title:String,
   describtion:String,
   price:Number,
   // category:[],
   // tags:[]
},{timestamps:true})

module.exports=TeaSchema
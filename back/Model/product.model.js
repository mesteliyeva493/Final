const mongoose = require('mongoose')
const ProductSchema=require('../Schemas/product.schema')



const  ProductModel=mongoose.model('prooduct',ProductSchema)


module.exports=ProductModel  
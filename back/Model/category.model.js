const mongoose = require('mongoose')
const categorySchema=require('../Schemas/category.schema')


const CategoryModel=mongoose.model('category',categorySchema)


module.exports=CategoryModel  
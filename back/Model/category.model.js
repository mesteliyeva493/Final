const mongoose = require('mongoose')
const CategorySchema=require('../Schemas/category.schema')


const CategoryModel=mongoose.model('category',CategorySchema)


module.exports=CategoryModel  
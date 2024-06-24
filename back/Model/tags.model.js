const mongoose = require('mongoose')
const tagsSchema=require('../Schemas/tags.schema')


const  TagsModel=mongoose.model('tags',tagsSchema)


module.exports=TagsModel  
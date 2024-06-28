const mongoose = require('mongoose')
const tagsSchema=require('../Schemas/tags.schema')


const TagModel=mongoose.model('tags',tagsSchema)


module.exports=TagModel  
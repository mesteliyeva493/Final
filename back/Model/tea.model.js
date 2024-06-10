const mongoose = require('mongoose')
const TeaSchema=require('../Schemas/tea.schema')



const  TeaModel=mongoose.model('prooduct',TeaSchema)


module.exports=TeaModel  
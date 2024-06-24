const mongoose = require('mongoose')
const LogoSchema=require('../Schemas/logo.schema')


const  LogoModel=mongoose.model('logo',LogoSchema)


module.exports=LogoModel  
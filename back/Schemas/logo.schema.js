const mongoose=require('mongoose')


const LogoSchema=new mongoose.Schema({
    img:String
},{timestamps:true})


module.exports=LogoSchema
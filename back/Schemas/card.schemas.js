const mongoose=require('mongoose')


const CardSchema=new mongoose.Schema({
    icon:String,
    title:String,
    description:String,

},{timestamps:true})


module.exports=CardSchema
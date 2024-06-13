const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const product_router=require("./Routes/product.router")
app.use(cors())
const PORT=5050
app.use(express.json())


app.use('/product',product_router)
mongoose.connect("mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/").then(()=>{
    console.log("connected!")
})


app.listen(PORT, ()=>{
    console.log("back is running")
})
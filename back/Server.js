const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const product_router=require("./Routes/product.router")
const category_router=require("./Routes/categories.router")
const logo_router=require("./Routes/logo.router")
const card_router=require("./Routes/card.router")
const tags_router = require("./Routes/tag.router")
const user_router = require("./Routes/user.router")

app.use(cors())
const PORT=5050
app.use(express.json())




app.use('/product',product_router)
app.use('/categories',category_router)
app.use('/logo',logo_router)
app.use('/card',card_router)
app.use('/tags',tags_router)
app.use('/users', user_router)


mongoose.connect("mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/").then(()=>{
    console.log("connected!")
})


app.listen(PORT, ()=>{
    console.log("back is running")
})
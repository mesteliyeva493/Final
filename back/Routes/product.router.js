const express=require('express')
const ProductController=require('../Controller/product.controller')
const product_router=express.Router()

product_router.get('/',ProductController.getAll)
product_router.get('/:id',ProductController.get)
product_router.put('/:id',ProductController.update)
product_router.post('/',ProductController.post)
product_router.delete('/:id',ProductController.delete)



module.exports=product_router
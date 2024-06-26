const express=require('express')
const CategoryController=require('../Controller/category.controller')
const category_router=express.Router()

category_router.get('/',CategoryController.getAll)
category_router.get('/:id',CategoryController.get)
category_router.put('/:id',CategoryController.update)
category_router.post('/',CategoryController.post)
category_router.delete('/:id',CategoryController.delete)


module.exports=category_router
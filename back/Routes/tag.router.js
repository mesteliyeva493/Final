const express=require('express')
const TagsController=require('../Controller/tags.controller')
const tags_router=express.Router()

tags_router.get('/',TagsController.getAll)
tags_router.get('/:id',TagsController.get)
tags_router.put('/:id',TagsController.update)
tags_router.post('/',TagsController.post)
tags_router.delete('/:id',TagsController.delete)



module.exports=tags_router
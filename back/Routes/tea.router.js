const express=require('express')
const TeaController = require('../Controller/tea.controller')

const tea_router=express.Router()

tea_router.get('/',TeaController.getAll)
tea_router.get('/:id',TeaController.get)
tea_router.put('/:id',TeaController.update)
tea_router.post('/',TeaController.post)
tea_router.delete('/:id',TeaController.delete)



module.exports=tea_router
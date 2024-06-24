const express=require('express')
const LogoController=require('../Controller/logo.controller')
const logo_router=express.Router()

logo_router.get('/',LogoController.getAll)
logo_router.get('/:id',LogoController.get)
logo_router.put('/:id',LogoController.update)
logo_router.post('/',LogoController.post)
logo_router.delete('/:id',LogoController.delete)


module.exports=logo_router
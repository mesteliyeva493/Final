const express=require('express')
const CardController=require('../Controller/card.controller')
const card_router=express.Router()



card_router.get('/',CardController.getAll)
card_router.get('/:id',CardController.get)
card_router.put('/:id',CardController.update)
card_router.post('/',CardController.post)
card_router.delete('/:id',CardController.delete)


module.exports=card_router
const express = require('express')
const OrderController = require('../Controller/order.controller')
const order_router = express.Router()

order_router.get('/', OrderController.getAll)
order_router.get('/:id', OrderController.getOne)
order_router.post('/', OrderController.add)
order_router.delete('/:id', OrderController.delete)
order_router.put('/status/:id', OrderController.updateStatus);


module.exports = order_router
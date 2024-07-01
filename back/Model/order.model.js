const mongoose = require('mongoose')
const OrderSchema = require('../Schemas/order.schema')
const OrderModel = mongoose.model('myorders', OrderSchema)

module.exports = OrderModel
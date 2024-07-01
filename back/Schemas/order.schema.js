const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'myusers' },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    house: String,
    company: String,
    apartment: String,
    town: String,
    state: String,
    post: String,
    country: String,
    totalPrice: Number,
    status: {
        type: String,
        enum: ['Pending', 'Accept', 'Reject'],
        default: 'Pending',
    },
    items: {
        type: [],
        default: [],
    }
}, { timestamps: true })

module.exports = OrderSchema
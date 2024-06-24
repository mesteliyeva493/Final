const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    number: String,
    password: String,
    role: {
        type: String,  
        enum: ['admin', 'super-admin', 'client']
    }
    // wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Productsone' }]
}, { timestamps: true })


module.exports = UserSchema
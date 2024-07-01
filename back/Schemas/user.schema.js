const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,  
        enum: ['admin', 'super-admin', 'client']
    }
}, { timestamps: true })


module.exports = UserSchema
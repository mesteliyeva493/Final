const mongoose = require('mongoose')
const UserSchema=require('../Schemas/user.schema')

const UserModel = mongoose.model('Userses', UserSchema)

module.exports = UserModel
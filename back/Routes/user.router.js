const express = require('express')
const UserController = require('../Controller/user.controller')
const protect = require('../Middleware/auth.middleware')

const user_router = express.Router()


user_router.get('/', UserController.getAll)
user_router.get('/getMe',protect, UserController.getMe)
user_router.get('/:id', UserController.get)
user_router.post('/login', UserController.login)
user_router.post('/register', UserController.register)
user_router.delete('/:id', UserController.delete)


module.exports=user_router
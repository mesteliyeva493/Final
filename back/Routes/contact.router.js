const express = require('express')
const ContactController = require('../Controller/contact.controller')

const contact_router = express.Router()

contact_router.post('/', ContactController.post)

module.exports = contact_router
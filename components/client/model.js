const mongoose = require('mongoose')

const Client = mongoose.model('clients', { name: String, address: String, mobile: Number, email: String, password: String })

module.exports = Client

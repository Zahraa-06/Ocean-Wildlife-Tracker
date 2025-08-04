require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

module.exports = mongoose.connection

//authenticate users for verified, sightings for specific user, admin can only edit species

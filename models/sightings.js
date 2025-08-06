const mongoose = require('mongoose')

const sightingSchema = new mongoose.Schema({
  species: { type: mongoose.Schema.Types.ObjectId, ref: 'Species', required: true },
  location: String,
  photoUrl: String,
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: String,
  verified: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Sighting', sightingSchema)
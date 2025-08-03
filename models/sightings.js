const mongoose = require('mongoose')

const sightingSchema = new mongoose.Schema({
  species: { type: mongoose.Schema.Types.ObjectId, ref: 'Species', required: true },
  location: String,
  timestamp: { type: Date, default: Date.now },
  photoUrl: String,
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: String,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Sighting',sightingSchema)
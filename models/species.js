const mongoose = require('mongoose')

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  scientificName: String,
  conservationStatus: {
    type: String,
    enum: ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'],
    default: 'LC'
  },
  description: String,
  habitat: [String],
  imageUrl: String
});

module.exports = mongoose.model('Species',speciesSchema)
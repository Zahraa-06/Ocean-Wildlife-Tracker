const Sighting = require('../../models/sightings.js')

// API Sightings controllers - returns JSON responses
const apiController = {
  // Get all sightings for authenticated user
  index(req, res) {
    res.json(res.locals.data.sightings)
  },

  // Get single sighting
  show(req, res) {
    res.json(res.locals.data.sighting)
  },

  // Create new sighting
  create(req, res) {
    res.status(201).json(res.locals.data.sighting)
  },

  // Delete sighting
  destroy(req, res) {
    res.status(200).json({ message: 'Sighting successfully deleted' })
  }
}

module.exports = apiController 
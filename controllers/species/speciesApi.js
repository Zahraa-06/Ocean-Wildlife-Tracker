const Species = require('../../models/species.js')

// API Species controllers - returns JSON responses
const apiController = {
  // Get all Species for authenticated user
  index(req, res) {
    res.json(res.locals.data.species)
  },

  // Get single species
  show(req, res) {
    res.json(res.locals.data.species)
  },

  // Create new species
  create(req, res) {
    res.status(201).json(res.locals.data.species)
  },

  // Delete species
  destroy(req, res) {
    res.status(200).json({ message: 'Species successfully deleted' })
  }
}

module.exports = apiController 
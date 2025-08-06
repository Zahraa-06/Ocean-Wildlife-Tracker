const Species = require('../../models/species.js')

const apiController = {
  index(req, res) {
    res.json(res.locals.data.species)
  },
  show(req, res) {
    res.json(res.locals.data.species)
  },
  create(req, res) {
    res.status(201).json(res.locals.data.species)
  },
  destroy(req, res) {
    res.status(200).json({ message: 'Species successfully deleted' })
  }
}

module.exports = apiController 
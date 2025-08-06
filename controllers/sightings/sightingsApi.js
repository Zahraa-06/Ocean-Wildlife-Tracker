const apiController = {
  index(req, res) {
    res.json(res.locals.data.sightings)
  },
  show(req, res) {
    res.json(res.locals.data.sighting)
  },
  create(req, res) {
    res.status(201).json(res.locals.data.sighting)
  },
  destroy(req, res) {
    res.status(200).json({ message: 'Sighting successfully deleted' })
  }
}

module.exports = apiController 
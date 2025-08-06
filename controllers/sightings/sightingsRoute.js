const express = require('express')
const router = express.Router()
const viewController = require('./sightingsViews.js')
const dataController = require('./sightingsData.js')
const speciesData = require('../species/speciesData.js')
const authDataController = require('../auth/authData.js')

router.get('/', authDataController.auth, dataController.index, viewController.index)
router.get('/all', authDataController.auth, dataController.indexAll, viewController.index)
router.get('/new', authDataController.auth, speciesData.getAll, viewController.newView)
router.delete('/:id', authDataController.auth, dataController.destroy, viewController.redirectHome)
router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow)
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome)
router.get('/:id/edit', authDataController.auth, speciesData.getAll, dataController.show, viewController.edit)
router.get('/:id', authDataController.auth, dataController.show, viewController.show)

module.exports = router


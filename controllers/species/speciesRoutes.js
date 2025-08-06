const express = require('express')
const router = express.Router()
const viewController = require('./speciesViews.js')
const dataController = require('./speciesData.js')
const authDataController = require('../auth/authData.js')

router.get('/', authDataController.auth, dataController.getAll, viewController.index)
router.get('/new', authDataController.auth, viewController.newView)
router.delete('/:id', authDataController.auth, dataController.destroy, viewController.redirectHome)
router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow)
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome)
router.get('/:id/edit', authDataController.auth, dataController.show, viewController.edit)
router.get('/:id', authDataController.auth, dataController.show, viewController.show)

module.exports = router


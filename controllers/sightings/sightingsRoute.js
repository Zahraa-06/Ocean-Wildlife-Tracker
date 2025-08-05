const express = require('express')
const router = express.Router()
const viewController = require('./sightingsViews.js')
const dataController = require('./sightingsData.js')
const speciesData = require ('../species/speciesData.js')
const authDataController = require('../auth/authData.js')

// Index
router.get('/', authDataController.auth, dataController.index, viewController.index) //Add authDataController.auth first

// New
router.get('/new', authDataController.auth, speciesData.getAll, (req, res, next) =>{
console.log(res.locals.data)
next()
}, viewController.newView )

// Delete
router.delete('/:id', authDataController.auth, dataController.destroy, viewController.redirectHome)

// Update
router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow)

// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome)

// Edit
router.get('/:id/edit', authDataController.auth, speciesData.getAll, dataController.show, viewController.edit)

// Show
router.get('/:id', authDataController.auth, dataController.show, viewController.show)

// export router
module.exports = router


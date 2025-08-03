const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/authApi')
const sightingApiController = require('../controllers/sightings/sightingsApi')
const sightingDataController = require('../controllers/sightings/sightingsData')
const speciesApiController = require('../controllers/species/speciesApi')
const speciesDataController = require('../controllers/species/speciesData')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// Sightings API Routes
router.get('/sightings', userApiController.auth, sightingDataController.index, sightingApiController.index)
router.get('/sightings/:id', userApiController.auth, sightingDataController.show, sightingApiController.show)
router.post('/sightings', userApiController.auth, sightingDataController.create, sightingApiController.create)
router.put('/sightings/:id', userApiController.auth, sightingDataController.update, sightingApiController.show)
router.delete('/sightings/:id', userApiController.auth, sightingDataController.destroy, sightingApiController.destroy)

// Species API Routes
router.get('/species', userApiController.auth, speciesDataController.index, speciesApiController.index)
router.get('/species/:id', userApiController.auth, speciesDataController.show, speciesApiController.show)
router.post('/species', userApiController.auth, speciesDataController.create, speciesApiController.create)
router.put('/species/:id', userApiController.auth, speciesDataController.update, speciesApiController.show)
router.delete('/species/:id', userApiController.auth, speciesDataController.destroy, speciesApiController.destroy)

module.exports = router 
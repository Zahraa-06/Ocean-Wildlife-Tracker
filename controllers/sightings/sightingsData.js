const Sighting = require('../../models/sightings.js')

const dataController = {}

dataController.index = async (req,res,next) => {
   try{
    res.locals.data.sightings = await Sighting.find({}).populate('species reportedBy')
    res.locals.data.token = req.query.token
    next()
  } catch(error){
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req,res,next) => {
    try {
        await Sighting.findOneAndDelete({'_id': req.params.id}).then(() => {
            next()
        })
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req,res,next) => {
    if (req.body.verified === 'on'){
        req.body.verified = true;
    } else if (req.body.verified !== true) {
        req.body.verified = false;
    }
    try {
        res.locals.data.sighting = await Sighting.findByIdAndUpdate(req.params.id, req.body, {new: true})
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req,res,next) => {
    if (req.body.verified === 'on'){
        req.body.verified = true;
    } else if (req.body.verified !== true) {
        req.body.verified = false;
    }
    try {
        req.body.reportedBy = req.user._id
        console.log()
        res.locals.data.sighting = await Sighting.create(req.body)
        req.user.sightings.addToSet({_id: res.locals.data.sighting._id})
        await req.user.save()
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req,res,next) => {
    try {
        res.locals.data.sighting = await Sighting.findById(req.params.id).populate('species reportedBy')
        res.locals.data.token = req.query.token
        if(!res.locals.data.sighting){
            throw new error (`Could not locate a sighting with the id ${req.params.id}`)
        }
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController
const Species = require('../../models/species.js')

const dataController = {}

dataController.index = async (req,res,next) => {
   try{
    const user = await req.user.populate('species')
    res.locals.data.species =  user.species
    next()
  } catch(error){
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req,res,next) => {
    try {
        await Species.findOneAndDelete({'_id': req.params.id}).then(() => {
            next()
        })
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req,res,next) => {
   
    try {
        res.locals.data.species = await Species.findByIdAndUpdate(req.params.id, req.body, {new: true})
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req,res,next) => {
   
    try {
        res.locals.data.species = await Species.create(req.body)
        req.user.species.addToSet({_id: res.locals.data.species._id})
        await req.user.save()
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req,res,next) => {
    try {
        res.locals.data.species = await Species.findById(req.params.id)
        if(!res.locals.data.species){
            throw new error (`Could not locate a species with the id ${req.params.id}`)
        }
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController
var
  Haiku = require('../models/Haiku.js')

module.exports = {
  index: (req, res) => {
    Haiku.find({}, (err, haikus) => {
      res.json(haikus)
    })
  },

  show: (req, res) => {
    Haiku.findById(req.params.id, (err, haiku) => {
      //
    })
  },

  create: (req, res) => {
    Haiku.create(req.body, (err, haiku) => {

    })
  },

  update: (req, res) => {
    Haiku.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, haiku) => {

    })
  },

  destroy: (req, res) => {
    Haiku.findByIdAndRemove(req.params.id, (err, haiku) => {

    })
  }
}

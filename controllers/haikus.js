var
  Haiku = require('../models/Haiku.js')

module.exports = {
  index: (req, res) => {
    Haiku.find({}, (err, haikus) => {
      // respond here
    })
  },

  show: (req, res) => {
    Haiku.findById(req.params.id, (err, haiku) => {
      // respond here
    })
  },

  create: (req, res) => {
    Haiku.create(req.body, (err, haiku) => {
      // respond here
    })
  },

  update: (req, res) => {
    Haiku.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, haiku) => {
      // respond here
    })
  },

  destroy: (req, res) => {
    Haiku.findByIdAndRemove(req.params.id, (err, haiku) => {
      // respond here
    })
  }
}

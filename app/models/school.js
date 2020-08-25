const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addressLineOne: {
    type: String
  },
  addressLineTwo: {
    type: String
  },
  addressCity: {
    type: String
  },
  addressState: {
    type: String
  },
  addressZipCode: {
    type: String,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('School', schoolSchema)

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  hashedPassword: {
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
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('User', userSchema)

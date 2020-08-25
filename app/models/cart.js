const mongoose = require('mongoose')
import itemSchema from './item'


const cartSchema = new mongoose.Schema({
  priceTotal: {
    type: Number,
    required: true
  },
  items: [itemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  school: {
    name: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)

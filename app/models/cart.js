const mongoose = require('mongoose')
// import itemSchema from './item'


const cartSchema = new mongoose.Schema({
  priceTotal: {
    type: Number,
    required: true
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
      },
    qty: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  school: {
    name: String
  },
  isPurchased: {
    type: Boolean,
    default: false
  }
}, {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
})

module.exports = mongoose.model('Cart', cartSchema)

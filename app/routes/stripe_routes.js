// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// // pull in Mongoose model for examples
 const Item = require('../models/item')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.get('/potatoes', (req, res, next) => {
  // const user = req.user.id
  // return res.status(204)
  Item.find()
    .then(carts => {
      // `examples` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return carts.map(cart => cart.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(carts => res.status(200).json({ carts: carts }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

router.post("/create-payment-intent", async (req, res) => {
  const { items, currency } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: currency
  })

  router.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret})
})

module.exports = router

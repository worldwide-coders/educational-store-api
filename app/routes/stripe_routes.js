// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// // pull in Mongoose model for examples
const Cart = require('../models/cart')

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
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const calculateOrderAmount = cartId => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return (Cart.findById(cartId)
    .populate('lineItems.item')
    .then(cart => {
      return cart.priceTotal
    }))
}

router.post("/create-payment-intent", async (req, res) => {
  console.log('this is req', req.body)
  const { items, currency, cartId } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const amount = await calculateOrderAmount( cartId) * 100
  console.log('this is amoutn', amount, 'type of', typeof amount)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency
  })
  res.status(201).json({ clientSecret: paymentIntent.client_secret })
})
router.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
    res.json({ client_secret: intent.client_secret })
})
router.post('/pay', async (request, response) => {
  let intent;
  if (request.body.payment_method_id) {
    // Create the PaymentIntent
    // intent = await stripe.paymentIntents.create({
    //   payment_method: request.body.payment_method_id,
    //   amount: 1099,
    //   currency: 'usd',
    //   confirmation_method: 'manual',
    //   confirm: true
    intent = request.body.intent
  } else if (request.body.payment_intent_id) {
    intent = await stripe.paymentIntents.confirm(
      request.body.payment_intent_id
    )
  }
  // Send the response to the client
  response.send(generateResponse(intent))
    .catch(e => (
      // Display error on client
      response.send({ error: e.message })
    ))
})

module.exports = router

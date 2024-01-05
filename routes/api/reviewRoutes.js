const express = require('express')
const router = express.Router()
const Review = require('../../models/reviewModel')

// Create a new review:
router.post('/reviews', (req, res) => {
    const newReview = new Review({
        user: req.body.user,
        room: req.body.room,
        rating: req.body.rating,
        comment: req.body.comment
    })
    newReview.save()
        .then(review => res.json(review))
        .catch(err => res.status(400).json(err))
})

// Get all reviews
router.get('/reviews', (req, res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json(err))
  })

// Get review details:
router.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id)
      .then(review => res.json(review))
      .catch(err => res.status(400).json(err))
})

// Update user details:
router.put('/reviews/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(review => res.json(review))
      .catch(err => res.status(400).json(err))
})

// Delete an individual user based on id
router.delete('/reviews/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json(err))
  })

  module.exports = router
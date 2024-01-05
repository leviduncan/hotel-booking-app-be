const express = require('express')
const router = express.Router()
const User = require('../../models/userModel')

// Create a new user:
router.post('/users', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

// Get all users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
  })

// Get user details:
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err))
})

// Update user details:
router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err))
})

// Delete an individual user based on id
router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json(err))
  })

  module.exports = router
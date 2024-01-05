const express = require('express')
const router = express.Router()
const Booking = require('../../models/bookingModel')

// Create a new booking:
router.post('/bookings', (req, res) => {
    const newBooking = new Booking({
        user: req.body.user,
        hotel: req.body.hotel,
        room: req.body.room,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        totalAmount: req.body.totalAmount,
    })
    newBooking.save()
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json(err))
})

// Get all bookings
router.get('/bookings', (req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json(err))
  })

// Get booking details:
router.get('/bookings/:id', (req, res) => {
    Booking.findById(req.params.id)
      .then(booking => res.json(booking))
      .catch(err => res.status(400).json(err))
})

// Update booking details:
router.put('/bookings/:id', (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(booking => res.json(booking))
      .catch(err => res.status(400).json(err))
})

// Delete an individual booking based on id
router.delete('/bookings/:id', (req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json(err))
  })

  module.exports = router
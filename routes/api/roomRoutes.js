const express = require('express')
const router = express.Router()
const Room = require('../../models/roomModel')

// Create a new room
router.post('/rooms', (req, res) => {
    const newRoom = new Room({
        roomname: req.body.roomname,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price,
        capacity: req.body.capacity,
        status: req.body.status,
        amenities: req.body.amenities,
        bookings: req.body.bookings,
        reviews: req.body.reviews,
    })
    newRoom.save()
    .then(room => res.json(room))
    .catch(err => res.status(400).json(err))
})

// Get all rooms
router.get('/rooms', (req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json(err))
  })

// Get room by ID
router.get('/rooms/:id', (req, res) => {
    Room.findById(req.params.id)
      .then(room => res.json(room))
      .catch(err => res.status(400).json(err))
})

// Update room by ID
router.put('/rooms/:id', (req, res) => {
    Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(room => res.json(room))
      .catch(err => res.status(400).json(err))
})

// Delete room by ID
// Can not delete a room. Rooms can just be unavailable

module.exports = router;
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    roomname: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      amenities: [{
        type: String,
      }],
      bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      }],
      reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      }],
    createdAt: { type: Date, default: Date.now, },
    updatedAt: { type: Date, default: Date.now, },
})

module.exports = mongoose.model("Room", RoomSchema)
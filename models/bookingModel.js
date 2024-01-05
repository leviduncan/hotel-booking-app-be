const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
      },
      checkInDate: {
        type: Date,
        required: true,
      },
      checkOutDate: {
        type: Date,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Confirmed', 'Cancelled'],
      },
    createdAt: { type: Date, default: Date.now, },
    updatedAt: { type: Date, default: Date.now, },
})

module.exports = mongoose.model("Booking", BookingSchema)
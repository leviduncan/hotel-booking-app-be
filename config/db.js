const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DB_CONNECT)

        console.log('DB Connected...')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
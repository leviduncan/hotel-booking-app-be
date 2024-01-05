const express = require('express')
const app = express()
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000

// Middleware
require('dotenv').config()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('Server running!')
})

const userRouter = require('./routes/api/userRoutes')
app.use('/api', userRouter)

const roomRouter = require('./routes/api/roomRoutes')
app.use('/api', roomRouter)

app.listen(process.env.PORT || port, () => {
    console.log(`Server is up and running on Port: ${port}`)
})
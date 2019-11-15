require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



// .env file
const PORT = process.env.PORT || 3000
const MONGO_DB = process.env.MONGO_DB



// Database connection
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

const db = mongoose.connection
db.on('error', (error) => console.error(`Database not connected!!! Error : ${error}`))
db.once('open', () => console.info('Database conneted!!!'))

//Middleware
app.use(bodyParser.json())
app.use(express.json())



// Middleware Routes
const routes = require('./src/routes')
app.use('/', routes)


// Run the server
app.listen(PORT, () => {
  console.info(`Server up and running on port ${PORT}`)
})

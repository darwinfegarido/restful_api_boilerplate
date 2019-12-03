const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const mysql = require('mysql')
const migrateSchema = require('./src/models/mysql_schema')
const { db_query } = require('./src/middleware/database_connection')
require('dotenv').config()


// .env file
const PORT = process.env.PORT || 3000
const MONGO_DB = process.env.MONGO_DB

// mysql DB

const MYSQL_PORT = process.env.MYSQL_PORT
const MYSQL_URL = process.env.MYSQL_URL
const MYSQL_USERNAME = process.env.MYSQL_USERNAME
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_DATABASE = process.env.MYSQL_DATABASE


// MySql DB Connection
// Refference https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
const con = mysql.createConnection({
  host: MYSQL_URL,
  port: MYSQL_PORT,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database:MYSQL_DATABASE
})

con.connect(e => {
  (e) ? console.log(e) : console.log('Mysql DB connected')
})

// Global mysql connect
global.mysql_connect = con
migrateSchema()




// Database connection
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

const db = mongoose.connection
db.on('error', (error) => console.error(`Mongo DB not connected!!! Error : ${error}`))
db.once('open', () => console.info('Mongo DB connected'))

//Middleware
app.use(cors())
app.use(express.json({type: () => true}))


// Middleware Routes
const routes = require('./src/routes')
app.use('/', routes)

app.use((err, req, res, next) => {
  if(err){
    if(process.env.DEBUG === 'true'){
      console.error(err)
      //soon save the error on log file
    }
    res.status(404).json({
          "status": 404,
          "message": "Invalid request",
          "data": ""
        })
  }
  next()
})

// Run the server
app.listen(PORT, () => {
  console.info(`Server up and running on port ${PORT}`)
}, )

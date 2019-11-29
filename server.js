const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()


// .env file
const PORT = process.env.PORT || 3000
const MONGO_DB = process.env.MONGO_DB

// mysql DB

const MYSQL_PORT = process.env.MYSQL_PORT
const MYSQL_URL = process.env.MYSQL_URL
const MYSQL_USERNAME = process.env.MYSQL_USERNAME
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

// MySql DB Connection
// Refference https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
const con = mysql.createConnection({
  host: MYSQL_URL,
  port: MYSQL_PORT,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD
})

con.connect(e => {
  if(e) console.log("MySQL Error => ", e.message);
  console.log('Mysql Database Connected!!')
  // con.query('SHOW DATABASES', (err, res) => {
  //   if(err) console.log(err.message)
  //   console.log(res)
  // })

})


// Global mysql connect
global.mysql_connect = con



// Database connection
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

const db = mongoose.connection
db.on('error', (error) => console.error(`Mongo DB not connected!!! Error : ${error}`))
db.once('open', () => console.info('Mongo DB conneted!!!'))

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

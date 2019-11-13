require('dotenv').config()


let express = require('express')
let app = express()
let mongoose = require('mongoose')


const PORT = process.env.PORT || 3000
const MONGO_DB = process.env.MONGO_DB

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

const db = mongoose.connection
db.on('error', (error) => console.error(`Database not connected!!! Error : ${error}`))
db.once('open', () => console.info('Database conneted!!!'))

app.use(express.json())

const routes = require('./src/routes')
app.use('/', routes)

app.listen(PORT, () => {
  console.info(`Server has started on port ${PORT}`)
})

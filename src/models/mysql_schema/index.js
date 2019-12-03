const fs = require('fs')

const path = './src/models/mysql_schema'
const fileSchema = fs.readdirSync(path)


const migrateSchema = () => {
  const con = global.mysql_connect
  const listOfSchema = []
  fileSchema.forEach((schema) => {
    let removeExtension = schema.split('.')[0]
    if(removeExtension != 'index'){
      con.query(require(`./${removeExtension}`), (err, res) => {
        if(err) console.log(err.message)
      })
    }
  })

}

module.exports = migrateSchema

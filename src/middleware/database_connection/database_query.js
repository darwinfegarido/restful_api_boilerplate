
const { user } = require('../../models/mysql_schema')

const db_query = () => {
  const con = global.mysql_connect

    con.query(user, (err, res) => {
      if(err) console.log(err.message)
      console.log("table created")
    })
}



module.exports = db_query

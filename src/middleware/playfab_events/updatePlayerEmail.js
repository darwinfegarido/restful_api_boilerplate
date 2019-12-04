const conn = global.mysql_connect

const updatePlayerEmail = (entity_id, email) => {
  const query =`UPDATE players_profile SET email='${email}' WHERE entity_id='${entity_id}' LIMIT 1;`
  conn.query(query, (err, res) => {
    if(err) console.log(err.message)
  })
}

module.exports = updatePlayerEmail

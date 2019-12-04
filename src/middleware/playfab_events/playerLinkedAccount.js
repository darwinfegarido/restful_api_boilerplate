const conn = global.mysql_connect

const playerLinkedAccount = (email, entity_id) => {
  const query =`INSERT INTO players_profile (email, entity_id) VALUES ('${email}', '${entity_id}');`

  conn.query(query, (err, res) => {
    if(err) console.log(err.message)
  })
}

module.exports = playerLinkedAccount

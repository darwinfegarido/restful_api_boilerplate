const conn = global.mysql_connect

const playerLogin = (entity_id, date_login, ipaddress) => {
  const query =`UPDATE players SET date_login='${date_login}', ipaddress='${ipaddress}', is_online=1 WHERE entity_id='${entity_id}' LIMIT 1;`

  conn.query(query, (err, res) => {
    if(err) console.log(err.message)
  })
}

module.exports = playerLogin

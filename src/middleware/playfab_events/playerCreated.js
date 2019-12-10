const conn = global.mysql_connect

const playerCreated = (entity_id, created, publisher_id) => {
  const query =`INSERT INTO players (entity_id, created, publisher_id) VALUES ('${entity_id}', '${created}', '${publisher_id}') ON DUPLICATE KEY UPDATE created='${created}', publisher_id='${publisher_id}';`

  conn.query(query, (err, res) => {
    if(err) console.log(err.message)
  })
}

module.exports = playerCreated

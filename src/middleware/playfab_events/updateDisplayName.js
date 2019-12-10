const conn = global.mysql_connect

module.exports = (entity_id, displayname) => {
  const query =`INSERT INTO players_profile (entity_id, display_name) VALUES ('${entity_id}', '${displayname}') ON DUPLICATE KEY UPDATE display_name='${displayname}';`

  conn.query(query, (err, res) => {
    if(err) console.log(err.message)
  })
}

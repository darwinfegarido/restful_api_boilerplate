const users = (routes) => {

  //GET
  routes.get('/users', (req, res) => {
    res.send({"message":"this is get"})
  })

  //POST
  routes.post('/users', (req, res) => {
    const id = req.body.id
    res.send({"message": `This is client id ${id}`})
  })

  //UPDATE
  routes.patch('/users', (req, res) => {
    res.send({"message":"this is update"})
  })

  //DELETE
  routes.delete('/users', (req, res) => {
    res.send({"message":"this is delete"})
  })
}
module.exports = users

const dashboard = (routes) => {

  //GET
  routes.get('/dashboard', (req, res) => {
    res.send({"message":"this is get"})
  })

  //POST
  routes.post('/dashboard', (req, res) => {
    const id = req.body.id
    res.send({"message": `This is client id ${id}`})
  })

  //UPDATE
  routes.patch('/dashboard', (req, res) => {
    res.send({"message":"this is update"})
  })

  //DELETE
  routes.delete('/dashboard', (req, res) => {
    res.send({"message":"this is delete"})
  })
}
module.exports = dashboard

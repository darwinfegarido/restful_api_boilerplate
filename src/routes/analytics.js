const analytics = (routes) => {

  routes.get('/analytics', (req, res) => {
    res.send({"message":"this is get"})
  })

  routes.post('/analytics', (req, res) => {
    const id = req.body.id
    res.send({"message": `This is client id ${id}`})
  })

  routes.patch('/analytics', (req, res) => {
    res.send({"message":"this is update"})
  })

  routes.delete('/analytics', (req, res) => {
    res.send({"message":"this is delete"})
  })
}
module.exports = analytics

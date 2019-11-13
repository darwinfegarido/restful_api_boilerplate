const redemption = (routes) => {

  routes.get('/redemption', (req, res) => {
    res.send({"message":"this is get"})
  })

  routes.post('/redemption', (req, res) => {
    const id = req.body.id
    res.send({"message": `This is client id ${id}`})
  })

  routes.patch('/redemption', (req, res) => {
    res.send({"message":"this is update"})
  })

  routes.delete('/redemption', (req, res) => {
    res.send({"message":"this is delete"})
  })
}
module.exports = redemption

const auth = require('../middleware/auth')

const dashboard = (routes) => {

  //GET
  routes.get('/dashboard', [ auth ], (req, res) => {
    const user = res.user
    res.send({"message":`Welcome ${user.firstname}`})
  })


  //POST
  routes.post('/dashboard', [ auth ], (req, res) => {
    const id = req.body.id
    res.send({"message": `This is client id ${id}`})
  })

  //UPDATE
  routes.patch('/dashboard', [ auth ], (req, res) => {
    res.send({"message":"this is update"})
  })

  //DELETE
  routes.delete('/dashboard', [ auth ], (req, res) => {
    res.send({"message":"this is delete"})
  })
}
module.exports = dashboard

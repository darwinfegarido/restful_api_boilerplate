const { authControllers } = require('../controllers')

const auth = (routes) => {

  //Registration
  routes.post('/register',  authControllers.register)

  //Get Token
  routes.post('/verify', authControllers.verifyToken)

  //Login
  routes.post('/login', authControllers.login)

  //Logout
  routes.get('/logout', authControllers.logout)
}

module.exports = auth

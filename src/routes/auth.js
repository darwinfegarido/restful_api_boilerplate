const { register, getToken, login, logout } = require('../controllers')

const auth = (routes) => {

  //Registration
  routes.post('/register',  register)

  //Get Token
  routes.get('/token', getToken)

  //Login
  routes.post('/login', login)

  //Logout
  routes.get('/logout', logout)
}

module.exports = auth

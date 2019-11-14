const { register, getToken, login, logout } = require('../controllers')
const getUserByEmail = require('../middleware/getUserByEmail')
const { loginValidation, registerValidation } = require('../middleware/validation')

const auth = (routes) => {

  //Registration
  routes.post('/register', [ registerValidation ], register)

  //Get Token
  routes.get('/token', getToken)

  //Login
  routes.post('/login', [ loginValidation, getUserByEmail ], login)

  //Logout
  routes.post('/logout', logout)
}

module.exports = auth

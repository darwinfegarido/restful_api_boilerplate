const { authControllers } = require('../controllers')

const auth = (routes) => {

  //Registration
  routes.post('/register',  authControllers.register)
        .post('/verify', authControllers.verifyToken)
        .post('/login', authControllers.login)
        .get('/logout', authControllers.logout);

}

module.exports = auth

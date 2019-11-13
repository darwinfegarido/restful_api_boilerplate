const User = require('../models/User')

const auth = {

  //Registration Controller
  register : async (req, res, next) => {
      const newUser = new User(req.body)


      try{
        const user = await newUser.save()
        res.status(201).send(user)
      }catch(err){
        res.status(400).send({ message: (err.code == 11000) ? 'Email Already Exists!!!' : err.message })
      }


    },



  //Get Token for login authentication
  getToken : (req, res) => {
    res.send('get Token')
  },

  //Login with token
  login : (req, res) => {
    res.send('Login')
  },

  //logout delete session
  logout : (req, res) => {
    res.send('Logout')
  },

}

module.exports = auth

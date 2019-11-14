const User = require('../models/User')
const bcrypt = require('bcryptjs')

const auth = {

  //Registration Controller
  register : async (req, res) => {

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      const data = {
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
      }

      const newUser = new User(data)

      try{
        const user = await newUser.save()
        res.status(201).send(user)
      }catch(err){
        res.status(400).send({ message: (err.code == 11000) ? 'Email Already Exists!!!' : err.message })
      }

    },

  //Get Token for login authentication
  getToken : (req, res) => {
    // create session token
    res.send('get Token')
  },

  //Login with token
  login : async (req, res) => {
    // This will response the session token
    const user = res.userDetails

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send({message: 'Invalid Credentials!!!'})

    res.status(200).send(res.userDetails)

  },

  //logout delete session
  logout : (req, res) => {
    //This will destroy the token or session
    res.send('Logout')
  },

}



module.exports = auth

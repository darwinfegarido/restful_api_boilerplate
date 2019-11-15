const bcrypt = require('bcryptjs')
const User = require('../models/User')
const getUserByEmail = require('../middleware/getUserByEmail')
const { loginValidation, registerValidation } = require('../middleware/validation')


const auth = {

  /*** Registration Controller ***/
  register : async (req, res, next) => {

      const dataToValidate = {
        name:req.body.firstname,
        password:req.body.password,
        email:req.body.email
      }

      try{

        //validate parameters
        const validate = registerValidation(dataToValidate)
        if(validate) throw new Error(validate)

        //check the user if exists
        const checkUserByEmail = await getUserByEmail(req.body.email)
        if(checkUserByEmail) throw new Error("Email Already Exists!!!")

        //encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const data = {
          firstname:req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hashedPassword,
        }

        //save the datas
        const newUser = new User(data)
        const user = await newUser.save()
        res.status(201).send({message: "Registered!!!"})
      }catch(err){
        res.status(400).send({ message: err.message })
      }

    },


  /*** Get Token for login authentication ***/
  getToken : (req, res) => {
    // create session token
    res.send('get Token')
  },


  /*** This will response the session token ***/
  login : async (req, res) => {

    const userCredentials = {
      email:req.body.email,
      password:req.body.password
    }

    try{
      //check the parameters if meet the requirements
      const validate = await loginValidation(userCredentials)
      if(validate) throw new Error(validate)

      //get the user by email
      const user = await getUserByEmail(req.body.email)

      //compare the hashpassword
      const validPass = await bcrypt.compare(req.body.password, user.password)
      if(!validPass) return res.status(400).send({message: 'Invalid Credentials!!!'})

      res.status(200).send({message:`Welcome ${user.firstname}`})
    }catch(err){
      res.status(400).send({ message: 'Invalid Credentials'})
    }


  },

  /*** logout  and destroy the session ***/
  logout : (req, res) => {
    //This will destroy the token or session
    res.send('Logout')
  },

}



module.exports = auth

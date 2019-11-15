const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const getUserByEmail = require('../middleware/getUserByEmail')
const { loginValidation, registerValidation } = require('../middleware/validation')
const { successResponse, errorResponse, customResponse } = require('../middleware/response')

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

    let message,
        data = null,
        status;

    try{
      //check the parameters if meet the requirements
      const validate = await loginValidation(userCredentials)
      if(validate) throw new Error(validate)

      //get the user by email
      const user = await getUserByEmail(req.body.email)

      //compare the hashpassword
      const validPass = await bcrypt.compare(req.body.password, user.password)
      if(!validPass) throw new Error('Invalid Credentials!!!')

      const storedData = {
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        role:0
      }

      //generate token
      const token = await jwt.sign(storedData, process.env.SECRET_KEY)
      res.setHeader('Authorization', token)

      status = 200
      message = `Welcome ${user.firstname}`
      data = token

    }catch(err){
      status = 400
      message = err.message
    }

    res.status(status).send(customResponse(message, data, status))

  },

  /*** logout  and destroy the session ***/
  logout : (req, res) => {
    //This will destroy the token or session
    res.setHeader('Authorization', '')
    res.status(200).send(successResponse('Logout'))
  },

}



module.exports = auth

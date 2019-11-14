const Joi = require('@hapi/joi')

const schema = {
  name:Joi.string().max(255),
  email:Joi.string().max(255).required(),
  password:Joi.string().min(8).required(),
}


const registerValidation = (req, res, next) => {

  const { error } = Joi.validate({
    name:req.body.firstname,
    email:req.body.email,
    password:req.body.password
  }, schema)

  if(error != null){
    const err = error.details[0].message
    return res.status(400).send({message:err})

  }
  next()
}

const loginValidation = (req, res, next) => {

  const { error } = Joi.validate({
    email:req.body.email,
    password:req.body.password
  }, schema)

  if(error != null){
    const err = error.details[0].message
    return res.status(400).send({message:err})

  }
  next()
}


module.exports = { loginValidation, registerValidation }

const Joi = require('@hapi/joi')

const schema = {
  name:Joi.string().max(255),
  email:Joi.string().max(255).required(),
  password:Joi.string().min(8).required(),
}


const registerValidation = (data) => {
  const { error } = Joi.validate({
    name:data.firstname,
    email:data.email,
    password:data.password
  }, schema)
  return (error != null) ? error.details[0].message : false
}

const loginValidation = (data) => {
  const { error } = Joi.validate({
    email:data.email,
    password:data.password
  }, schema)
  return (error != null) ? error.details[0].message : false
}


module.exports = { loginValidation, registerValidation }

const User = require('../models/User')

async function getUserByEmail(req, res, next){
  const email = req.body.email
  const userDetails = await User.findOne({email: email})
  if(userDetails == null){
    return res.status(401).send({message: "Invalid Credentials!!!"})
  }
  res.userDetails = userDetails
  next();
}

module.exports = getUserByEmail

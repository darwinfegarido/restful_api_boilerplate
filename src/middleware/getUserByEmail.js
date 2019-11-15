const User = require('../models/User')

async function getUserByEmail(email){
  const userDetails = await User.findOne({email: email})
  return (userDetails != null) ? userDetails : false
}

module.exports = getUserByEmail

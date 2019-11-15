const jwt = require('jsonwebtoken')
const { errorResponse, successResponse } = require('./response')

const auth = async (req, res, next) => {
  try{
    const key = process.env.SECRET_KEY
    const token = req.headers.authorization
    const verify = await jwt.verify(token, key)
    res.user = verify
    next()
  }catch(err){
    return res.status(400).send(errorResponse("Access Denied!!!"))
  }


}


module.exports = auth

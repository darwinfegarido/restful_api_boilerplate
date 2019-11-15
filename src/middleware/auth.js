const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

  try{
    const key = process.env.SECRET_KEY
    const token = req.headers.authorization
    const verify = await jwt.verify(token, key)
    res.user = verify
    next()
  }catch(err){
    res.status(400).send('Access Denied!!!')
  }

}


module.exports = auth

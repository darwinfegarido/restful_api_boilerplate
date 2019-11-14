const routes = require('express').Router()
const fs = require('fs')


const fileRoutes = fs.readdirSync('./src/routes')

const listOfRoutes = []
fileRoutes.forEach((routers) => {
  let removeExtension = routers.split('.')[0]
  if(removeExtension != 'index'){
    listOfRoutes.push(removeExtension)
  }
})


let _;

listOfRoutes.forEach((router) => {
  _ = require(`./${router}`)
  _(routes)
})

routes.use(_)


module.exports = routes

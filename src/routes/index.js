const express = require('express')
const routes = express.Router()

const listOfRoutes = [
  "authRoutes",
  "users",
  "analytics",
  "redemption",
  "dashboard",
]

let _;

listOfRoutes.forEach((router) => {
  _ = require(`./${router}`)
  _(routes)
})

routes.use(_)


module.exports = routes

const auth = require('../middleware/auth')
const { feedControllers } = require('../controllers')

const feed = (routes) => {

  //GET All Feeds
  routes.get('/feeds', [ auth ], feedControllers.getFeeds)
}
module.exports = feed

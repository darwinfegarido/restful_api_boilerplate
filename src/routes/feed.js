const auth = require('../middleware/auth')
const { feedControllers } = require('../controllers')

const feed = (routes) => {

  //GET All Feeds
  routes.get('/feeds', feedControllers.getFeeds)
}
module.exports = feed

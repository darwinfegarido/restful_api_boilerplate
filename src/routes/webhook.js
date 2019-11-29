const { webhookControllers } = require('../controllers')


const webhook = (routes) => {

  //POST
  routes.post('/webhook', webhookControllers.hook)


}
module.exports = webhook

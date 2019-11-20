const auth = require('../middleware/auth')
const { articleControllers } = require('../controllers')

const article = (routes) => {

  //GET
  routes.get('/content/article', [ auth ], articleControllers.getArticle)


  //POST
  routes.post('/content/article', [ auth ], articleControllers.addArticle)

  //UPDATE
  routes.patch('/content/article', [ auth ], articleControllers.updateArticle)

  //DELETE
  routes.delete('/content/article', [ auth ], articleControllers.deleteArticle)
}
module.exports = article

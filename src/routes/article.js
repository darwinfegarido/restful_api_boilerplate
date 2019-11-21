const auth = require('../middleware/auth')
const { articleControllers } = require('../controllers')

const article = (routes) => {

  //GET One
  routes.get('/content/article/:id', [ auth ], articleControllers.getArticle)


  //POST
  routes.post('/content/article', [ auth ], articleControllers.addArticle)

  //UPDATE
  routes.patch('/content/article/:id', [ auth ], articleControllers.updateArticle)

  //DELETE
  routes.delete('/content/article/:id', [ auth ], articleControllers.deleteArticle)
}
module.exports = article

const auth = require('../middleware/auth')
const { articleControllers } = require('../controllers')

const article = (routes) => {

  routes.get('/content/article/:id', [ auth ], articleControllers.getArticle)
        .post('/content/article', [ auth ], articleControllers.addArticle)
        .patch('/content/article/:id', [ auth ], articleControllers.updateArticle)
        .delete('/content/article/:id', [ auth ], articleControllers.deleteArticle);

}
module.exports = article

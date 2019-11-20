const Article = require('../models/Article')
const { successResponse, errorResponse, customResponse } = require('../middleware/response')


const article = {
  getArticle: async (req, res) => {

    res.status(200).send(successResponse(message='this is a message for article', data={"test":"test"}))
  },


  addArticle: async (req, res) => {
    const body = req.body
    body.type = 'Article'
    body.status = 1

    let status,
        message,
        data;

    try{

      const article = Article(body)
      const save = await article.save()
      console.log(save)
      status = 200
      message = "Success"
    }catch(err){
      status = 400
      message = err.message
    }

    res.status(status).send(customResponse(message=message, data=null, status=status))
  },

  updateArticle: async (req, res) => {
    res.status(200).send(successResponse(message='this is a message for update article', data={"test":"test"}))
  },

  deleteArticle: async (req, res) => {
    res.status(200).send(successResponse(message='this is a message for delete article', data={"test":"test"}))
  },
}

module.exports = article

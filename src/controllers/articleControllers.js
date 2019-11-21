const Article = require('../models/Article')
const Feed = require('../models/Feed')
const { successResponse, errorResponse, customResponse } = require('../middleware/response')
const { articleValidation } = require('../middleware/validation/articleValidation');


const article = {

  getArticle: async (req, res) => {
    const id = req.params.id
    let status,
        message,
        data;
    try{
      status = 200
      message = "Success"
      data = await Article.findOne({_id:id}, {_id:0, __v:0})
    }catch(err){
      status = 400
      message = "Invalid request"
    }
    res.status(status).send(customResponse(message, data, status))
  },


  addArticle: async (req, res) => {
    const body = req.body
    body.type = 'Article'
    body.status = 1

    let status,
        message,
        data;

    try{

      const valid = articleValidation(body)
      if(valid) throw new Error(valid)

      const article = Article(body)

      const saveToFeeds = {
        type:"Article",
        foreign_key:article._id,
        status:article.status,
        title:article.title,
        summary:article.summary,
        img_banner:article.img_banner,
        reward:article.reward,
        date_expiration:article.date_expiration,
      }

      const feed = Feed(saveToFeeds)

      await feed.save()
      await article.save()
      status = 200
      message = "Success"
      data = article._id
    }catch(err){
      status = 400
      message = err.message
    }

    res.status(status).send(customResponse(message=message, data=data, status=status))
  },

  updateArticle: async (req, res) => {
    res.status(200).send(successResponse(message='this is a message for update article', data={"test":"test"}))
  },

  deleteArticle: async (req, res) => {
    const id = req.params.id

    let status,
        message,
        data;

    try{
      status = 200
      message = `Deletion Success`
      await Article.findByIdAndRemove({_id:id})
      await Feed.deleteOne({foreign_key:id})
    }catch(err){
      status = 400
      message = "Invalid Request!!!"
    }
    res.status(status).send(customResponse(message, data, status))
  },
}

module.exports = article

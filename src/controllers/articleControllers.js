const Article = require('../models/Article')
const Feed = require('../models/Feed')
const { successResponse, errorResponse, customResponse } = require('../middleware/response')
const articleValidation = require('../middleware/validation/articleValidation');
const articleUpdateValidation = require('../middleware/validation/articleUpdateValidation');


const article = {

  //get one article by id
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

  // add article
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

  // update one article by id
  updateArticle: async (req, res) => {

    const query = { _id: req.params.id }
    const upsert = req.body

    let status,
        message,
        data;

    try{

      const valid = articleUpdateValidation(upsert)
      if(valid) throw new Error(valid)
      upsert.date_updated = Date.now()

      status = 200
      message = "Update Success"
      await Article.findOneAndUpdate(query, upsert, {upsert: true})

    }catch(err){
      status = 400
      message = err.message
    }

    res.status(status).send(customResponse(message=message, data=query._id, status=status))
  },

  // delete one article
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

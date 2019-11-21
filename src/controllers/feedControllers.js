const Feed = require('../models/Feed')
const { successResponse, errorResponse, customResponse } = require('../middleware/response')
const { articleValidation } = require('../middleware/validation/articleValidation');


const feed = {
  getFeeds: async (req, res) => {

    let status,
        message,
        data;

    try{
      status = 200;
      message = "Success";
      data = await Feed.find({}, {_id:0, __v:0}).sort({date_created:-1, _id:0});
    }catch(err){
      status = 400
      message = err.message

    }

    res.status(status).send(customResponse(message, data, status))
  },


}

module.exports = feed

const Joi = require('@hapi/joi')



const schema = {
  title:Joi.string().required(),
  summary: Joi.string().required(),
  description: Joi.string().required(),
  img_banner:Joi.string().required(),
  reward:Joi.string().required(),
  date_expiration: Joi.date().max(255),
}


const articleValidation = (data) => {
  const { error } = Joi.validate({
    title: data.title,
    summary: data.summary,
    description: data.description,
    img_banner: data.img_banner,
    reward: data.reward,
    date_expiration: data.date_expiration,
  }, schema)
  return (error != null) ? error.details[0].message : false
}



module.exports = { articleValidation }

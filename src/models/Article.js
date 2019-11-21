const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const articleSchema = new Schema({
  type: { type: 'String', max:255, required: true },
  status: { type: 'String', max:1, default:1, required: true },
  title: { type: 'String', max:255, required: true },
  summary: { type: 'String', required: false },
  description: { type: 'String', max:255, required: false },
  img_banner: { type: 'String', max:10, required: false },
  reward: { type: 'Number', required: true },
  rate: { type: 'Number', max:5 },
  date_created: { type: 'Date', default: Date.now, required: true },
  date_updated: { type: 'Date', default: Date.now, required: true },
  //Add 20days for default expiration
  date_expiration: { type: 'Date', default:  () => new Date(+new Date() + 20*24*60*60*1000), required: true },
});

module.exports = mongoose.model('Article', articleSchema);


/***

type:
status
title
summary
description
img_banner
reward
rate
date_created
date_updated
date_expiration




***/

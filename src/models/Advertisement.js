const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  type: { type: 'String', max:255, required: true },
  status: { type: 'String', max:1, default:1, required: true },
  title: { type: 'String', max:255, required: true },
  summary: { type: 'String', required: false },
  description: { type: 'String', max:255, required: false },
  img_banner: { type: 'String', max:10, required: false },
  reward: { type: 'Number', max:5, required: true },
  rate: { type: 'String', max:1, required: true },
  date_created: { type: 'Date', default: Date.now, required: true },
  date_updated: { type: 'Date', default: Date.now, required: true },
  date_expiration: { type: 'Date', required: false },
});

module.exports = mongoose.model('Article', userSchema);


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

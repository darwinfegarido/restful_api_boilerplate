const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  type: { type: 'String', max:255, required: true },
  foreign_key: { type: 'String', max:255, required: true },
  status: { type: 'String', max:1, default:1, required: true },
  title: { type: 'String', max:255, required: true },
  summary: { type: 'String', required: false },
  img_banner: { type: 'String', max:10, required: false },
  reward: { type: 'Number', max:5, required: true },
  date_created: { type: 'Date', default: Date.now, required: true },
  date_updated: { type: 'Date', default: Date.now, required: true },
  date_expiration: { type: 'Date', required: false },
});

module.exports = mongoose.model('Feed', feedSchema);


/***

type:
foreign_key
status
title
summary
img_banner
reward
date_created
date_updated
date_expiration




***/

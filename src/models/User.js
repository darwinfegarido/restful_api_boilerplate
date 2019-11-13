const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: 'String', required: true },
  lastname: { type: 'String', required: true },
  email: { type: 'String', required: true, unique: true },
  password: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('User', userSchema);
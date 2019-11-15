const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', max:255, required: true, unique: true },
  password: { type: 'String', max:255, required: true },
  firstname: { type: 'String', max:255, required: true },
  lastname: { type: 'String', max:255, required: true },
  gender: { type: 'String', max:10, required: false },
  birthday: { type: 'Date', required: false },
  occupation: { type: 'String', max:255, required: false },
  status: { type: 'String', max:50, required: false },
  children: { type: 'String', max:255, required: false },
  education: { type: 'String', max:255, required: false },
  location: { type: 'String', max:255, required: false },  
  dateJoin: { type: 'Date', default: Date.now, required: true },
  dateUpdate: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('User', userSchema);


/***

public void FromJSONNode(JSONNode node) {
            _firstName = node["firstName"];
            _lastName = node["lastName"];
            _userID = node["userID"];
            _gender = node["gender"];
            _birthday = node["birthday"];
            _occupation = node["occupation"];
            _status = node["status"];
            _children = node["children"];
            _education = node["education"];
            _location = node["location"];
        }

***/

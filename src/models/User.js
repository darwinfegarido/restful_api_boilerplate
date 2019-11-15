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

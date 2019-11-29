// const Webhook = require('../models/Webhook')

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const webhookSchema = new Schema(global.schema);

const Webhook = mongoose.model('Webhook', webhookSchema);

const webhookControllers = {
  //{ type: 'String', default:null },
  //hook  data from playfb
  hook: async (req, res) => {

    try{
      const data = req.body[0]
      const newData = {}
      const keys = Object.keys(data).map((v) => {
        newData[v] = (String(typeof(data[v])) == 'object') ? JSON.stringify(data[v]) : data[v]
        return v
      })

      const dictSchema = {}

      keys.forEach(e => {
        dictSchema[e] = { type: 'String', default:null }
      })

      const webhookSchema = new Schema(dictSchema);
      const Webhook = mongoose.model('Webhook', webhookSchema);

      const saveData = new Webhook(newData)
      await saveData.save()

      console.log(saveData)
    }catch(err){
      console.log(err.message)
    }

    res.status(200).send()
  }


}

module.exports = webhookControllers

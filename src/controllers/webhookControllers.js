const Webhook = require('../models/Webhook')

const webhookControllers = {
  //{ type: 'String', default:null },
  //hook  data from playfb
  hook: async (req, res) => {

    try{
      const data = req.body[0]

      const headers = [
        "CustomTags",
        "EntityId",
        "EntityType",
        "EventId",
        "EventName",
        "EventNamespace",
        "History",
        "Reserved",
        "Source",
        "SourceType",
        "Timestamp",
      ]

      const commonProperties = {}
      const otherDetails = {}

      Object.keys(data).map(e => {
        var key = e
        var value = data[e]

        if(headers.indexOf(e) != -1){
          commonProperties[key] = value
        }else{
          otherDetails[key] = value
        }
      })
      commonProperties['OtherDetails'] = JSON.stringify(otherDetails)

      const saveData = new Webhook(commonProperties)
      await saveData.save()

      console.log(`Data : ${commonProperties['EventName']} at ${commonProperties['Timestamp']}`)

    }catch(err){
      console.log(err.message)
    }

    res.status(200).send()
  }


}

module.exports = webhookControllers

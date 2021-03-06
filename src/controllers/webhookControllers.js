const Webhook = require('../models/Webhook')
const dataFiltering = require('./dataFiltering')

const webhookControllers = {
  //{ type: 'String', default:null },
  //hook  data from playfb
  hook: async (req, res) => {

    try{

      const datas = req.body

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


      datas.forEach(async (data) => {
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
        commonProperties['OtherDetails'] = otherDetails
        dataFiltering(commonProperties)
        // console.log(`Data : ${commonProperties['EventName']} at ${commonProperties['Timestamp']}`)
      })


    }catch(err){
      console.log(err.message)
    }

    res.status(200).send()
  }


}

module.exports = webhookControllers

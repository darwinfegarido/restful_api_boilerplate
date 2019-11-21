const fs = require('fs')


const fileModels = fs.readdirSync('./src/models')

const listOfModels = []
fileModels.forEach((model) => {
  let removeExtension = routers.split('.')[0]
  if(removeExtension != 'index'){
    listOfModels.push(removeExtension)
  }
})





module.exports = routes

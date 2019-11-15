
/*** Success Reponse ***/
const successResponse = (message, data=null) => {
  const response = {
    status: 200,
    message: message,
    data: data
  }
  return response
}

/*** Error Reponse ***/
const errorResponse = (message, data=null) => {
  const response = {
    status: 400,
    message: message,
    data: data
  }
  return response
}

/*** Custom Reponse ***/
const customResponse = (message, data=null, status) => {
  const response = {
    status: status,
    message: message,
    data: data
  }
  return response
}

module.exports = { successResponse, errorResponse, customResponse }

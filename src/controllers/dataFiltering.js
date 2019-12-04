const {
  playerCreated,
  playerLinkedAccount,
  playerLogin,
  updatePlayerEmail,
  } = require('../middleware/playfab_events')

const dateFormat = (date) => {
  const d = new Date(date)
  const YY = d.getFullYear()
  const MM = d.getMonth()
  const dd = d.getDate()
  const HH = d.getHours()
  const ii = d.getMinutes()
  const ss = d.getSeconds()
  return `${YY}-${MM}-${dd} ${HH}:${ii}:${ss}`
}

let entity_id,
    created,
    publisher_id,
    email,
    date_login,
    ipaddress;


module.exports = (datas) => {
  entity_id = datas['EntityId']
  switch(datas.EventName){
    case 'player_created':
      created = dateFormat(datas['OtherDetails']['Created'])
      publisher_id = datas['OtherDetails']['PublisherId']
      playerCreated(entity_id, created, publisher_id)
      break
    case 'player_linked_account':
      email = datas['OtherDetails']['Email']
      playerLinkedAccount(email, entity_id)
      break
    case 'player_logged_in':
      date_login = dateFormat(datas['Timestamp'])
      ipaddress = datas['OtherDetails']['IPV4Address']
      playerLogin(entity_id, date_login, ipaddress)
      break
    case 'player_updated_contact_email':
      email = datas['OtherDetails']['NewEmailAddress']
      updatePlayerEmail(entity_id, email)
      break
  }
}


// { EventName: 'player_updated_contact_email',
//   EventNamespace: 'com.playfab',
//   EntityType: 'player',
//   Source: 'PlayFab',
//   EntityId: '2F24E26FC0477C77',
//   EventId: 'c8be06f3c0f942789617de390cb820dc',
//   SourceType: 'BackEnd',
//   Timestamp: '2019-12-03T09:30:46.1071326Z',
//   History: null,
//   CustomTags: null,
//   Reserved: null,
//   OtherDetails:
//    { EmailName: 'Primary',
//      PreviousEmailAddress: null,
//      NewEmailAddress: 'test123@gmail.com',
//      TitleId: '7C294',
//      PlayFabEnvironment:
//       { Vertical: 'master',
//         Cloud: 'main',
//         Application: 'mainserver',
//         Commit: '5689b8c' } } }

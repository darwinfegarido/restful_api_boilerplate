const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const webhookSchema = new Schema({
  EventNamespace: { type: 'String' },
  OriginalTimestamp: { type: 'String'  },
  OriginalEventId: { type: 'String'  },
  PayloadJSON: { type: 'String'  },
  WriterEntity: { type: 'String'  },
  EntityLineage: { type: 'String'  },
  EventId: { type: 'String'  },
  EventName: { type: 'String'  },
  EntityType: { type: 'String'  },
  EntityId: { type: 'String' },
  SourceType: { type: 'String'  },
  Source: { type: 'String'  },
  Timestamp: { type: 'String'  },
  History: { type: 'String'  },
  CustomTags: { type: 'String'  },
  Reserved: { type: 'String'  },
  PlayFabEnvironment: { type: 'String'  }
});

module.exports = mongoose.model('Webhook', webhookSchema);


/***

Name	Type	Description
CustomTags	Object	Key-Value pair storage. Any provider of this event schema is allowed to send additional values in this property.
EntityId	String	The identifier for the entity (title, player, etc) to which this event applies.
EntityType	String	The type of entity (player, title, etc.) to which this event applies. If PlayFab is meant to take action on this entity, then the EntityType must be either 'player', 'character', or 'title'. It is required that any entity type that PlayFab does not currently parse should be prepended with a namespace (like 'com.mygame.guild') as PlayFab may begin to parse root entities at any time.
EventId	String	PlayFab-assigned unique identifier for this event.
EventName	String	The name of this event.
EventNamespace	String	The assigned namespacing for this event. For example: 'com.myprogram.ads'
History	PlayStreamEventHistory	The history of events associated with this event. This is set in cases where an event has generated children events via a trigger action.
Reserved	object	Reserved exclusively for PlayFab internal use.
Source	String	The name of the source of this PlayStream event; will be PlayFab if the event originated from us.
SourceType	SourceType	The type of source of this event (PlayFab partner, other backend, or from the PlayFab API).
Timestamp	DateTime	The time (in UTC) associated with this event.

***/

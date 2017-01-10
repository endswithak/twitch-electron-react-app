import { schema } from 'normalizr';

// Entities
export const gameEntity = new schema.Entity('games', {}, {idAttribute: 'name'});
export const channelEntity = new schema.Entity('channels', {}, {idAttribute: '_id'});
export const streamEntity = new schema.Entity('streams', {channel: channelEntity}, {idAttribute: '_id'});

// Objects
export const topGameObject = new schema.Object({game: gameEntity});

// Arrays
export const topGamesArray = new schema.Array(topGameObject);
export const streamsArray = new schema.Array(streamEntity);

// Responses
export const topGamesResponse = new schema.Object({top: topGamesArray});
export const topStreamsResponse = new schema.Object({streams: streamsArray});

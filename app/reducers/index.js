// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import chatScroll from './tmi/scrollActivity';
import backButton from './backButton';
import forwardButton from './forwardButton';
// TWITCH SDK AUTH
import twitchInit from './twitchSDK/auth/init';
import twitchStatus from './twitchSDK/auth/status';
import twitchChannel from './twitchSDK/auth/channel';
import twitchUser from './twitchSDK/auth/user';
import twitchLogin from './twitchSDK/auth/login';
// TWITCH SDK CHANNELS
import twitchUserChannel from './twitchSDK/channels/channel';
// TWITCH SDK COMMUNITIES
import twitchTopCommunities from './twitchSDK/communities/top';
import twitchCommunity from './twitchSDK/communities/community';
// TWITCH SDK CLIPS
import twitchTopClips from './twitchSDK/clips/top';
// TWITCH SDK GAMES
import twitchTopGames from './twitchSDK/games/top';
import twitchGame from './twitchSDK/games/game';
// TWITCH SDK EMOTES
import twitchUserEmotes from './twitchSDK/emotes/user'
// TWITCH SDK STREAMS
import twitchStream from './twitchSDK/streams/stream';
import twitchStreams from './twitchSDK/streams/streams';
import twitchGameStreams from './twitchSDK/streams/streamsByGame';
import twitchCommunityStreams from './twitchSDK/streams/streamsByCommunity';
// TWITCH SDK FOLLOWS
import twitchUserStreams from './twitchSDK/follows/streams';
import twitchUserRel from './twitchSDK/follows/userRel';
import twitchGameRel from './twitchSDK/follows/gameRel';
// TWITCH SDK SEARCH
import twitchSearchGames from './twitchSDK/search/games';
import twitchSearchChannels from './twitchSDK/search/channels';
import twitchSearchStreams from './twitchSDK/search/streams';
// TMI
import tmi from './tmi/chat';
import tmiSay from './tmi/say';

const rootReducer = combineReducers({
  tmi,
  tmiSay,
  backButton,
  forwardButton,
  chatScroll,
  twitchInit,
  twitchStatus,
  twitchChannel,
  twitchLogin,
  twitchUserChannel,
  twitchUser,
  twitchTopCommunities,
  twitchCommunity,
  twitchTopClips,
  twitchTopGames,
  twitchGame,
  twitchUserEmotes,
  twitchStream,
  twitchStreams,
  twitchGameStreams,
  twitchCommunityStreams,
  twitchUserStreams,
  twitchUserRel,
  twitchGameRel,
  twitchSearchGames,
  twitchSearchChannels,
  twitchSearchStreams,
  routing
});

export default rootReducer;

// @flow
import Twitch from 'twitch-sdk';

export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_ERROR = 'INIT_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';
export const GET_STATUS_ERROR = 'GET_STATUS_ERROR';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_ERROR = 'GET_GAMES_ERROR';
export const GET_STREAMS_SUCCESS = 'GET_STREAMS_SUCCESS';
export const GET_STREAMS_ERROR = 'GET_STREAMS_ERROR';
export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR';
export const GET_FOLLOWING_STREAMS_SUCCESS = 'GET_FOLLOWING_STREAMS_SUCCESS';
export const GET_FOLLOWING_STREAMS_ERROR = 'GET_FOLLOWING_STREAMS_ERROR';

export function initSuccess(status) {
  return {
    type: INIT_SUCCESS,
    status
  };
}

export function initError(error) {
  return {
    type: INIT_ERROR,
    error
  };
}

export function loginSuccess(status) {
  return {
    type: LOGIN_SUCCESS,
    status
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    status
  };
}

export function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error
  };
}

export function getStatusSuccess(status) {
  return {
    type: GET_STATUS_SUCCESS,
    status
  };
}

export function getStatusError(error) {
  return {
    type: GET_STATUS_ERROR,
    error
  };
}

export function getUserSuccess(channel) {
  return {
    type: GET_USER_SUCCESS,
    channel
  };
}

export function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    error
  };
}

export function getGamesSuccess(games) {
  return {
    type: GET_GAMES_SUCCESS,
    games
  };
}

export function getGamesError(error) {
  return {
    type: GET_GAMES_ERROR,
    error
  };
}

export function getStreamsSuccess(streams) {
  return {
    type: GET_STREAMS_SUCCESS,
    streams
  };
}

export function getStreamsError(error) {
  return {
    type: GET_STREAMS_ERROR,
    error
  };
}

export function getVideosSuccess(videos) {
  return {
    type: GET_VIDEOS_SUCCESS,
    videos
  };
}

export function getVideosError(error) {
  return {
    type: GET_VIDEOS_ERROR,
    error
  };
}

export function getFollowingStreamsSuccess(streams) {
  return {
    type: GET_FOLLOWING_STREAMS_SUCCESS,
    streams
  };
}

export function getFollowingStreamsError(error) {
  return {
    type: GET_FOLLOWING_STREAMS_ERROR,
    error
  };
}

export function twitchInit() {
  return (dispatch: Function) => {
    Twitch.init({clientId: 'vjj4prwwzrdge0yiigbik2e3ub7foe', electron: true}, (error, status) => {
      if (error) {
        dispatch(initError(error));
      }
      dispatch(initSuccess(status));
      dispatch(twitchGetGames(25, 0));
    });
    Twitch.events.addListener('auth.login', (status) => {
      dispatch(loginSuccess(status));
      dispatch(twitchGetUser());
    });
    Twitch.events.addListener('auth.logout', () => {
      dispatch(logoutSuccess());
    });
  };
}

export function twitchLogin() {
  return (dispatch: Function) => {
    Twitch.login({
      force_verify: true,
      scope: ['user_read', 'channel_read']
    });
  };
}

export function twitchLogout() {
  return (dispatch: Function) => {
    Twitch.logout((error) => {
      error ? dispatch(logoutError(error)) : dispatch(twitchGetStatus());
    });
  };
}

export function twitchGetStatus() {
  return (dispatch: Function) => {
    Twitch.getStatus((error, status) => {
      error ? dispatch(getStatusError(error)) : dispatch(getStatusSuccess(status));
    });
  };
}

export function twitchGetUser() {
  return (dispatch: Function) => {
    Twitch.api({method: 'channel'}, (error, channel) => {
      error ? dispatch(getUserError(error)) : dispatch(getUserSuccess(channel));
    });
  };
}

export function twitchGetGames(limit, offset) {
  return (dispatch: Function) => {
    Twitch.api({method: 'games/top', params: {limit:limit, offset:offset}}, (error, games) => {
      error ? dispatch(getGamesError(error)) : dispatch(getGamesSuccess(games.top));
    });
  };
}

export function twitchGetStreams(limit, offset) {
  return (dispatch: Function) => {
    Twitch.api({method: 'streams', params: {limit:limit, offset:offset}}, (error, streams) => {
      error ? dispatch(getStreamsError(error)) : dispatch(getStreamsSuccess(streams.streams));
    });
  };
}

export function twitchGetVideos(limit, offset) {
  return (dispatch: Function) => {
    Twitch.api({method: 'videos/top', params: {limit:limit, offset:offset}}, (error, videos) => {
      error ? dispatch(getVideosError(error)) : dispatch(getVideosSuccess(videos.videos));
    });
  };
}

export function twitchGetUserFollowingStreams(limit, offset) {
  return (dispatch: Function) => {
    Twitch.api({method: 'streams/followed', params: {limit:limit, offset:offset}}, (error, streams) => {
      error ? dispatch(getFollowingStreamsError(error)) : dispatch(getFollowingStreamsSuccess(streams.streams));
    });
  };
}

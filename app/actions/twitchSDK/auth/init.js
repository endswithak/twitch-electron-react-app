import Twitch from 'twitch-sdk';

import * as TwitchLoginActions from './login';
import * as TwitchStatusActions from './status';
import * as TwitchUserActions from './user';
import * as TwitchChannelActions from './channel';

export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_ERROR = 'INIT_ERROR';
export const INIT_LOADING = 'INIT_LOADING';
export const INIT_LOADED = 'INIT_LOADED';

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

export function initLoading() {
  return {
    type: INIT_LOADING,
  };
}

export function initLoaded() {
  return {
    type: INIT_LOADED,
  };
}

export function init() {
  return (dispatch) => {
    dispatch(initLoading());
    Twitch.init({clientId: 'vjj4prwwzrdge0yiigbik2e3ub7foe', electron: true}, (error, status) => {
      if (error) {
        dispatch(TwitchStatusActions.getStatusError(error));
        dispatch(initError(error));
      }
      else {
        Twitch.events.addListener('auth.login', (status) => {
          dispatch(TwitchLoginActions.loginSuccess(status));
          dispatch(TwitchStatusActions.getStatusSuccess(status));
          dispatch(TwitchUserActions.getUser());
          dispatch(TwitchChannelActions.getChannel());
        });

        Twitch.events.addListener('auth.logout', (status) => {
          dispatch(TwitchStatusActions.resetStatus());
          dispatch(TwitchUserActions.resetUser());
          dispatch(TwitchChannelActions.resetChannel());
        });

        dispatch(TwitchStatusActions.getStatusSuccess(status));
        dispatch(initSuccess(status));
      }
      dispatch(initLoaded());
    });
  };
}

import tmi from 'tmi.js';
import {getClient} from './chat';

export const TMI_SAY_SUCCESS = 'TMI_SAY_SUCCESS';
export const TMI_SAY_ERROR = 'TMI_SAY_ERROR';
export const TMI_SAY_LOADING = 'TMI_SAY_LOADING';
export const TMI_SAY_LOADED = 'TMI_SAY_LOADED';

export function tmiSaySuccess() {
  return {
    type: TMI_SAY_SUCCESS,
  };
}

export function tmiSayError(error) {
  return {
    type: TMI_SAY_ERROR,
    error
  };
}

export function tmiSayLoading() {
  return {
    type: TMI_SAY_LOADING,
  };
}

export function tmiSayLoaded() {
  return {
    type: TMI_SAY_LOADED,
  };
}

export function tmiSay(channel, message) {
  return (dispatch) => {
    const client = getClient();
    dispatch(tmiSayLoading());
    client.say(channel, message).then(function(data) {
      dispatch(tmiSaySuccess());
      dispatch(tmiSayLoaded());
    }).catch(function(error) {
      dispatch(tmiSayError(error));
      dispatch(tmiSayLoaded());
    });
  }
}

import Twitch from 'twitch-sdk';

export const GET_CHANNEL_SUCCESS = 'GET_CHANNEL_SUCCESS';
export const GET_CHANNEL_ERROR = 'GET_CHANNEL_ERROR';
export const CHANNEL_LOADING = 'CHANNEL_LOADING';
export const CHANNEL_LOADED = 'CHANNEL_LOADED';
export const RESET_CHANNEL = 'RESET_CHANNEL';

export function getChannelSuccess(channel) {
  return {
    type: GET_CHANNEL_SUCCESS,
    channel
  }
}

export function getChannelError(error) {
  return {
    type: GET_CHANNEL_ERROR,
    error
  }
}

export function resetChannel() {
  return {
    type: RESET_CHANNEL,
  }
}

export function channelLoading() {
  return {
    type: CHANNEL_LOADING
  }
}

export function channelLoaded() {
  return {
    type: CHANNEL_LOADED
  }
}

export function getChannel() {
  return (dispatch) => {
    dispatch(channelLoading());
    Twitch.api({method: 'channel'}, function(error, channel) {
      if (error) {
        dispatch(getChannelError(error));
      } else {
        dispatch(getChannelSuccess(channel));
      }
      dispatch(channelLoaded());
    });
  }
}

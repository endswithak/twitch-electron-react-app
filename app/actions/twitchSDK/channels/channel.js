import Twitch from 'twitch-sdk';

export const GET_USER_CHANNEL_SUCCESS = 'GET_USER_CHANNEL_SUCCESS';
export const GET_USER_CHANNEL_ERROR = 'GET_USER_CHANNEL_ERROR';
export const USER_CHANNEL_LOADING = 'USER_CHANNEL_LOADING';
export const USER_CHANNEL_LOADED = 'USER_CHANNEL_LOADED';

export function getUserChannelSuccess(channel, channelId) {
  return {
    type: GET_USER_CHANNEL_SUCCESS,
    channel,
    channelId
  };
}

export function getUserChannelError(error, channelId) {
  return {
    type: GET_USER_CHANNEL_ERROR,
    error,
    channelId
  };
}

export function userChannelLoading(channelId) {
  return {
    type: USER_CHANNEL_LOADING,
    channelId
  };
}

export function userChannelLoaded(channelId) {
  return {
    type: USER_CHANNEL_LOADED,
    channelId
  };
}

export function shouldGetUserChannel(state, channelId) {
  const channel = state.twitchUserChannel[channelId];
  if (!channel.channel._id) {
    return true;
  } else {
    return false;
  }
}

export function getUserChannelIfNeeded(channelId) {
  return (dispatch, getState) => {
    if (shouldGetUserChannel(getState(), channelId)) {
      return dispatch(getUserChannel(channelId));
    }
  }
}

export function getUserChannel(channelId) {
  return (dispatch) => {
    dispatch(userChannelLoading(channelId));
    Twitch.api({method: `channels/${channelId}`, params: {api_version: 5}}, (error, channel) => {
      if (error) {
        dispatch(getUserChannelError(error, channelId));
      } else {
        dispatch(getUserChannelSuccess(channel, channelId));
      }
      dispatch(userChannelLoaded(channelId));
    });
  };
}

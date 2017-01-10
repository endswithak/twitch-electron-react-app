import Twitch from 'twitch-sdk';

export const GET_STREAM_SUCCESS = 'GET_STREAM_SUCCESS';
export const GET_STREAM_ERROR = 'GET_STREAM_ERROR';
export const STREAM_LOADING = 'STREAM_LOADING';
export const STREAM_LOADED = 'STREAM_LOADED';

export function getStreamSuccess(stream, channelId) {
  return {
    type: GET_STREAM_SUCCESS,
    stream,
    channelId,
    receivedAt: Date.now()
  };
}

export function getStreamError(error, channelId) {
  return {
    type: GET_STREAM_ERROR,
    error,
    channelId
  };
}

export function streamLoading(channelId) {
  return {
    type: STREAM_LOADING,
    channelId
  };
}

export function streamLoaded(channelId) {
  return {
    type: STREAM_LOADED,
    channelId
  };
}

export function shouldGetStream(state, channelId) {
  const stream = state.twitchStream[channelId];
  const fetchLife = stream ? state.twitchStream[channelId].receivedAt : null;
  const currentTime = Date.now();
  if (!stream || (fetchLife && currentTime - fetchLife >= 60000)) {
    return true;
  } else {
    return false;
  }
}

export function getStreamIfNeeded(channelId) {
  return (dispatch, getState) => {
    if (shouldGetStream(getState(), channelId)) {
      return dispatch(getStream(channelId));
    }
  }
}

export function getStream(channelId) {
  return (dispatch) => {
    dispatch(streamLoading(channelId));
    Twitch.api({method: `streams/${channelId}`, params: {api_version: 5}}, (error, stream) => {
      if (error) {
        dispatch(getStreamError(error, channelId));
      } else {
        dispatch(getStreamSuccess(stream.stream, channelId))
      }
      dispatch(streamLoaded(channelId));
    });
  };
}

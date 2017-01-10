import Twitch from 'twitch-sdk';

export const GET_USER_STREAMS_SUCCESS = 'GET_USER_STREAMS_SUCCESS';
export const GET_USER_STREAMS_ERROR = 'GET_USER_STREAMS_ERROR';
export const USER_STREAMS_LOADING = 'USER_STREAMS_LOADING';
export const USER_STREAMS_LOADED = 'USER_STREAMS_LOADED';
export const RESET_USER_STREAMS = 'RESET_USER_STREAMS';
export const MORE_USER_STREAMS_SUCCESS = 'MORE_USER_STREAMS_SUCCESS';
export const MORE_USER_STREAMS_ERROR = 'MORE_USER_STREAMS_ERROR';
export const MORE_USER_STREAMS_LOADING = 'MORE_USER_STREAMS_LOADING';
export const MORE_USER_STREAMS_LOADED = 'MORE_USER_STREAMS_LOADED';

export function getUserStreamsSuccess(streams, limit, offset, total) {
  return {
    type: GET_USER_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    total,
    receivedAt: Date.now()
  }
}

export function getUserStreamsError(error) {
  return {
    type: GET_USER_STREAMS_ERROR,
    error
  }
}

export function userStreamsLoading() {
  return {
    type: USER_STREAMS_LOADING
  }
}

export function userStreamsLoaded() {
  return {
    type: USER_STREAMS_LOADED
  }
}

export function resetUserStreams() {
  return {
    type: RESET_USER_STREAMS,
  }
}

export function moreUserStreamsSuccess(streams, limit, offset, total) {
  return {
    type: MORE_USER_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    total
  };
}

export function moreUserStreamsError(error) {
  return {
    type: MORE_USER_STREAMS_ERROR,
    error
  };
}

export function moreUserStreamsLoading() {
  return {
    type: MORE_USER_STREAMS_LOADING,
  };
}

export function moreUserStreamsLoaded() {
  return {
    type: MORE_USER_STREAMS_LOADED,
  };
}

export function getUserStreams(limit, offset) {
  return (dispatch) => {
    dispatch(userStreamsLoading());
    Twitch.api({method: 'streams/followed', params: {limit, offset}}, (error, streams) => {
      if (error) {
        dispatch(getUserStreamsError(error));
      } else {
        dispatch(getUserStreamsSuccess(streams.streams, limit, offset, streams._total));
      }
      dispatch(userStreamsLoaded());
    });
  }
}

export function shouldGetUserStreams(state) {
  const streams = state.twitchUserStreams.streams;
  const fetchLife = state.twitchUserStreams.receivedAt;
  const currentTime = Date.now();
  if (streams.length === 0 || (fetchLife && currentTime - fetchLife >= 60000)) {
    return true;
  } else {
    return false;
  }
}

export function getUserStreamsIfNeeded(limit, offset) {
  return (dispatch, getState) => {
    if (shouldGetUserStreams(getState())) {
      return dispatch(getUserStreams(limit, offset));
    }
  }
}

export function moreUserStreams() {
  return (dispatch, getState) => {
    dispatch(moreUserStreamsLoading());
    const nextLimit = getState().twitchUserStreams.limit;
    const nextOffset = getState().twitchUserStreams.nextOffset;
    Twitch.api({method: 'streams/followed', params: {limit: nextLimit, offset: nextOffset}}, (error, streams) => {
      if (error) {
        dispatch(moreUserStreamsError(error));
      } else {
        dispatch(moreUserStreamsSuccess(streams.streams, nextLimit, nextOffset, streams._total))
      }
      dispatch(moreUserStreamsLoaded());
    });
  };
}

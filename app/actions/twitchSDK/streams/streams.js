import Twitch from 'twitch-sdk';
import { normalize } from 'normalizr';
import { topStreamsResponse } from '../schema';

export const GET_STREAMS_SUCCESS = 'GET_STREAMS_SUCCESS';
export const GET_STREAMS_ERROR = 'GET_STREAMS_ERROR';
export const STREAMS_LOADING = 'STREAMS_LOADING';
export const STREAMS_LOADED = 'STREAMS_LOADED';
export const MORE_STREAMS_SUCCESS = 'MORE_STREAMS_SUCCESS';
export const MORE_STREAMS_ERROR = 'MORE_STREAMS_ERROR';
export const MORE_STREAMS_LOADING = 'MORE_STREAMS_LOADING';
export const MORE_STREAMS_LOADED = 'MORE_STREAMS_LOADED';

export function getStreamsSuccess(streams, limit, offset, total) {
  return {
    type: GET_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    total,
    receivedAt: Date.now()
  };
}

export function getStreamsError(error) {
  return {
    type: GET_STREAMS_ERROR,
    error
  };
}

export function streamsLoading() {
  return {
    type: STREAMS_LOADING,
  };
}

export function streamsLoaded() {
  return {
    type: STREAMS_LOADED,
  };
}

export function moreStreamsSuccess(streams, limit, offset, total) {
  return {
    type: MORE_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    total
  };
}

export function moreStreamsError(error) {
  return {
    type: MORE_STREAMS_ERROR,
    error
  };
}

export function moreStreamsLoading() {
  return {
    type: MORE_STREAMS_LOADING,
  };
}

export function moreStreamsLoaded() {
  return {
    type: MORE_STREAMS_LOADED,
  };
}

export function getStreams(limit, offset) {
  return (dispatch) => {
    dispatch(streamsLoading());
    Twitch.api({method: 'streams', params: {limit, offset}}, (error, streams) => {
      if (error) {
        dispatch(getStreamsError(error));
      } else {
        console.log(normalize(streams, topStreamsResponse));
        dispatch(getStreamsSuccess(streams.streams, limit, offset, streams._total))
      }
      dispatch(streamsLoaded());
    });
  };
}

export function shouldGetStreams(state) {
  const streams = state.twitchStreams.streams;
  const fetchLife = state.twitchStreams.receivedAt;
  const currentTime = Date.now();
  if (streams.length === 0 || (fetchLife && currentTime - fetchLife >= 60000)) {
    return true;
  } else {
    return false;
  }
}

export function getStreamsIfNeeded(limit, offset) {
  return (dispatch, getState) => {
    if (shouldGetStreams(getState())) {
      return dispatch(getStreams(limit, offset));
    }
  }
}

export function moreStreams() {
  return (dispatch, getState) => {
    dispatch(moreStreamsLoading());
    const nextLimit = getState().twitchStreams.limit;
    const nextOffset = getState().twitchStreams.nextOffset;
    Twitch.api({method: 'streams', params: {limit: nextLimit, offset: nextOffset}}, (error, streams) => {
      if (error) {
        dispatch(moreStreamsError(error));
      } else {
        dispatch(moreStreamsSuccess(streams.streams, nextLimit, nextOffset, streams._total))
      }
      dispatch(moreStreamsLoaded());
    });
  };
}

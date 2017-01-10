import Twitch from 'twitch-sdk';

export const SEARCH_STREAMS_SUCCESS = 'SEARCH_STREAMS_SUCCESS';
export const SEARCH_STREAMS_ERROR = 'SEARCH_STREAMS_ERROR';
export const SEARCH_STREAMS_LOADING = 'SEARCH_STREAMS_LOADING';
export const SEARCH_STREAMS_LOADED = 'SEARCH_STREAMS_LOADED';

export function searchStreamsSuccess(streams) {
  return {
    type: SEARCH_STREAMS_SUCCESS,
    streams
  };
}

export function searchStreamsError(error) {
  return {
    type: SEARCH_STREAMS_ERROR,
    error
  };
}

export function searchStreamsLoading() {
  return {
    type: SEARCH_STREAMS_LOADING,
  };
}

export function searchStreamsLoaded() {
  return {
    type: SEARCH_STREAMS_LOADED,
  };
}

export function searchStreams(q) {
  return (dispatch) => {
    dispatch(searchStreamsLoading());
    Twitch.api({method: 'search/streams', params: {query:encodeURIComponent(q), limit: 10, api_version:5}}, (error, streams) => {
      if (error) {
        dispatch(searchStreamsError(error));
      } else {
        dispatch(searchStreamsSuccess(streams.streams ? streams.streams : []));
      }
      dispatch(searchStreamsLoaded());
    });
  };
}

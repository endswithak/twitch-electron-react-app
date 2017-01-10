import Twitch from 'twitch-sdk';

export const SEARCH_CHANNELS_SUCCESS = 'SEARCH_CHANNELS_SUCCESS';
export const SEARCH_CHANNELS_ERROR = 'SEARCH_CHANNELS_ERROR';
export const SEARCH_CHANNELS_LOADING = 'SEARCH_CHANNELS_LOADING';
export const SEARCH_CHANNELS_LOADED = 'SEARCH_CHANNELS_LOADED';

export function searchChannelsSuccess(channels) {
  return {
    type: SEARCH_CHANNELS_SUCCESS,
    channels
  };
}

export function searchChannelsError(error) {
  return {
    type: SEARCH_CHANNELS_ERROR,
    error
  };
}

export function searchChannelsLoading() {
  return {
    type: SEARCH_CHANNELS_LOADING,
  };
}

export function searchChannelsLoaded() {
  return {
    type: SEARCH_CHANNELS_LOADED,
  };
}

export function searchChannels(q) {
  return (dispatch) => {
    dispatch(searchChannelsLoading());
    Twitch.api({method: 'search/channels', params: {query:encodeURIComponent(q), limit: 10, api_version:5}}, (error, channels) => {
      if (error) {
        dispatch(searchChannelsError(error));
      } else {
        dispatch(searchChannelsSuccess(channels.channels ? channels.channels : []));
      }
      dispatch(searchChannelsLoaded());
    });
  };
}

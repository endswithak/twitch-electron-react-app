import Twitch from 'twitch-sdk';

export const GET_USER_EMOTES_SUCCESS = 'GET_USER_EMOTES_SUCCESS';
export const GET_USER_EMOTES_ERROR = 'GET_USER_EMOTES_ERROR';
export const USER_EMOTES_LOADING = 'USER_EMOTES_LOADING';
export const USER_EMOTES_LOADED = 'USER_EMOTES_LOADED';

export function getUserEmotesSuccess(emotes, userId) {
  return {
    type: GET_USER_EMOTES_SUCCESS,
    emotes,
    userId
  };
}

export function getUserEmotesError(error, userId) {
  return {
    type: GET_USER_EMOTES_ERROR,
    error,
    userId
  };
}

export function userEmotesLoading(userId) {
  return {
    type: USER_EMOTES_LOADING,
    userId
  };
}

export function userEmotesLoaded(userId) {
  return {
    type: USER_EMOTES_LOADED,
    userId
  };
}

export function shouldGetUserEmotes(state, userId) {
  const userEmotes = state.twitchUserEmotes[userId];
  if (!userEmotes) {
    return true;
  } else {
    return false;
  }
}

export function getUserEmotesIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldGetUserEmotes(getState(), userId)) {
      return dispatch(getUserEmotes(userId));
    }
  }
}

export function getUserEmotes(userId) {
  return (dispatch) => {
    dispatch(userEmotesLoading(userId));
    Twitch.api({method: `users/${userId}/emotes`, params: {api_version: 5}}, (error, emotes) => {
      if (error) {
        dispatch(getUserEmotesError(error, userId));
      } else {
        dispatch(getUserEmotesSuccess(emotes.emoticon_sets, userId));
      }
      dispatch(userEmotesLoaded(userId));
    });
  };
}

import Twitch from 'twitch-sdk';

export const GET_USER_REL_SUCCESS = 'GET_USER_REL_SUCCESS';
export const GET_USER_REL_ERROR = 'GET_USER_REL_ERROR';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_ERROR = 'FOLLOW_USER_ERROR';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_ERROR = 'UNFOLLOW_USER_ERROR';
export const USER_REL_LOADING = 'USER_REL_LOADING';
export const USER_REL_LOADED = 'USER_REL_LOADED';

export function getUserRelSuccess(channelId) {
  return {
    type: GET_USER_REL_SUCCESS,
    channelId
  }
}

export function getUserRelError(channelId) {
  return {
    type: GET_USER_REL_ERROR,
    channelId
  }
}

export function followUserSuccess(channelId) {
  return {
    type: FOLLOW_USER_SUCCESS,
    channelId
  }
}

export function followUserError(error, channelId) {
  return {
    type: FOLLOW_USER_ERROR,
    error,
    channelId
  }
}

export function unfollowUserSuccess(channelId) {
  return {
    type: UNFOLLOW_USER_SUCCESS,
    channelId
  }
}

export function unfollowUserError(error, channelId) {
  return {
    type: UNFOLLOW_USER_ERROR,
    error,
    channelId
  }
}

export function userRelLoading(channelId) {
  return {
    type: USER_REL_LOADING,
    channelId
  }
}

export function userRelLoaded(channelId) {
  return {
    type: USER_REL_LOADED,
    channelId
  }
}

export function getUserRel(userId, channelId) {
  return (dispatch) => {
    dispatch(userRelLoading(channelId));
    Twitch.api({method: `users/${userId}/follows/channels/${channelId}`, params: {api_version: 5}}, function(error, channel) {
      if (error) {
        dispatch(getUserRelError(channelId));
      } else {
        dispatch(getUserRelSuccess(channelId));
      }
      dispatch(userRelLoaded(channelId));
    });
  }
}

export function shouldGetUserRel(state, channelId) {
  const rel = state.twitchUserRel[channelId];
  if (!rel) {
    return true;
  } else {
    return false;
  }
}

export function getUserRelIfNeeded(userId, channelId) {
  return (dispatch, getState) => {
    if (shouldGetUserRel(getState(), channelId)) {
      return dispatch(getUserRel(userId, channelId));
    }
  }
}

export function followUser(userId, channelId) {
  return (dispatch) => {
    dispatch(userRelLoading(channelId));
    Twitch.api({method: `users/${userId}/follows/channels/${channelId}`, params: {api_version: 5}, verb: 'PUT'}, function(error) {
      if (error) {
        dispatch(followUserError(error, channelId));
      } else {
        dispatch(followUserSuccess(channelId));
      }
      dispatch(userRelLoaded(channelId));
    });
  }
}

export function unfollowUser(userId, channelId) {
  return (dispatch) => {
    dispatch(userRelLoading(channelId));
    Twitch.api({method: `users/${userId}/follows/channels/${channelId}`, params: {api_version: 5}, verb: 'DELETE'}, function(error) {
      if (error) {
        dispatch(unfollowUserError(error, channelId));
      } else {
        dispatch(unfollowUserSuccess(channelId));
      }
      dispatch(userRelLoaded(channelId));
    });
  }
}

import Twitch from 'twitch-sdk';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const RESET_USER = 'RESET_USER';

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user
  }
}

export function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    error
  }
}

export function resetUser() {
  return {
    type: RESET_USER,
  }
}

export function userLoading() {
  return {
    type: USER_LOADING
  }
}

export function userLoaded() {
  return {
    type: USER_LOADED
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch(userLoading());
    Twitch.api({method: 'user'}, function(error, user) {
      if (error) {
        dispatch(getUserError(error));
      } else {
        dispatch(getUserSuccess(user));
      }
      dispatch(userLoaded());
    });
  }
}

import Twitch from 'twitch-sdk';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export function loginSuccess(status) {
  return {
    type: LOGIN_SUCCESS,
    status
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error
  }
}

export function login() {
  return (dispatch) => {
    Twitch.login({
      scope: ['user_read', 'channel_read', 'user_follows_edit', 'channel_feed_read', 'chat_login', 'user_subscriptions', 'channel_subscriptions', 'channel_feed_read', 'channel_feed_edit', 'channel_check_subscription'],
      force_verify: true
    });
  };
}

export function logout() {
  return (dispatch) => {
    Twitch.logout(function(error) {
      error ? dispatch(logoutError(error)) : dispatch(logoutSuccess());
    });
  };
}

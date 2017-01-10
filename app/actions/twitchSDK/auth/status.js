import Twitch from 'twitch-sdk';

export const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';
export const GET_STATUS_ERROR = 'GET_STATUS_ERROR';
export const RESET_STATUS = 'RESET_STATUS';

export function getStatusSuccess(status) {
  return {
    type: GET_STATUS_SUCCESS,
    status
  };
}

export function getStatusError(error) {
  return {
    type: GET_STATUS_ERROR,
    error
  };
}

export function resetStatus() {
  return {
    type: RESET_STATUS
  }
}

export function getStatus() {
  return (dispatch) => {
    Twitch.getStatus(function(error, status) {
      error ? dispatch(getStatusError(error)) : dispatch(getStatusSuccess(status));
    });
  };
}

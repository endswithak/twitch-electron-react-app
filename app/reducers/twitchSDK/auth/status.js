// @flow
import { GET_STATUS_SUCCESS, GET_STATUS_ERROR, RESET_STATUS } from '../../../actions/twitchSDK/auth/status';

export default function twitchStatus(state: Object = {status: {authenticated: false}, error: undefined}, action: Object) {
  switch (action.type) {
    case GET_STATUS_SUCCESS:
      return {...state,
        status: action.status,
        error: undefined
      }
    case GET_STATUS_ERROR:
      return {...state,
        status: {authenticated: false},
        error: action.error
      }
    case RESET_STATUS:
      return {...state,
        status: {authenticated: false},
        error: undefined
      }
    default:
      return state;
  }
}

// @flow
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../../../actions/twitchSDK/auth/login';

export default function twitchLogin(state: Object = {status: {authenticated: false}, error: undefined}, action: Object) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state,
        status: action.status,
      }
    case LOGOUT_SUCCESS:
      return {...state,
        status: {authenticated: false},
        error: undefined
      }
    case LOGOUT_ERROR:
      return {...state,
        status: {authenticated: false},
        error: action.error
      }
    default:
      return state;
  }
}

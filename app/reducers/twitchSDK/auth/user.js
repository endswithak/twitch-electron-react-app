// @flow
import {
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  USER_LOADING,
  USER_LOADED,
  RESET_USER
} from '../../../actions/twitchSDK/auth/user';

export default function twitchUser(
  state: Object = {
    user: {},
    error: null,
    loading: true
  }, action: Object) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state,
        user: action.user,
        error: null
      }
    case GET_USER_ERROR:
      return {...state,
        user: {},
        error: action.error
      }
    case USER_LOADING:
      return {...state,
        loading: true
      }
    case USER_LOADED:
      return {...state,
        loading: false
      }
    case RESET_USER:
      return {...state,
        loading: true,
        user: {},
        error: null
      }
    default:
      return state;
  }
}

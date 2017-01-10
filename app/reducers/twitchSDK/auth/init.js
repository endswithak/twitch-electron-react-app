// @flow
import { INIT_SUCCESS, INIT_ERROR, INIT_LOADING, INIT_LOADED } from '../../../actions/twitchSDK/auth/init';

export default function twitchInit(state: Object = {initiated: false, status: {authenticated: false}, loading: true, error: undefined}, action: Object) {
  switch (action.type) {
    case INIT_SUCCESS:
      return {...state,
        status: action.status,
        error: undefined,
        initiated: true
      }
    case INIT_ERROR:
      return {...state,
        status: {authenticated: false},
        error: action.error,
        initiated: false
      }
    case INIT_LOADING:
      return {...state,
        loading: true,
        initiated: false
      }
    case INIT_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

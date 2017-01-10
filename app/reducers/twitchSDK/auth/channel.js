// @flow
import {
  GET_CHANNEL_SUCCESS,
  GET_CHANNEL_ERROR,
  CHANNEL_LOADING,
  CHANNEL_LOADED,
  RESET_CHANNEL
} from '../../../actions/twitchSDK/auth/channel';

export default function twitchChannel(
  state: Object = {
    channel: {},
    error: null,
    loading: true
  }, action: Object) {
  switch (action.type) {
    case GET_CHANNEL_SUCCESS:
      return {...state,
        channel: action.channel,
        error: null
      }
    case GET_CHANNEL_ERROR:
      return {...state,
        channel: {},
        error: action.error
      }
    case CHANNEL_LOADING:
      return {...state,
        loading: true
      }
    case CHANNEL_LOADED:
      return {...state,
        loading: false
      }
    case RESET_CHANNEL:
      return {...state,
        loading: true,
        channel: {},
        error: null
      }
    default:
      return state;
  }
}

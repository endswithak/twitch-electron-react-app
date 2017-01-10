import {
  GET_USER_CHANNEL_SUCCESS,
  GET_USER_CHANNEL_ERROR,
  USER_CHANNEL_LOADING,
  USER_CHANNEL_LOADED
} from '../../../actions/twitchSDK/channels/channel';

const initialState = {
  channel: {},
  channelId: null,
  error: null,
  loading: true
}

function userChannel(state = initialState, action) {
  switch (action.type) {
    case GET_USER_CHANNEL_SUCCESS:
      return {...state,
        channel: action.channel,
        channelId: action.channelId,
        error: null,
      }
    case GET_USER_CHANNEL_ERROR:
      return {...state,
        channel: {},
        channelId: null,
        error: action.error,
      }
    case USER_CHANNEL_LOADING:
      return {...state,
        loading: true
      }
    case USER_CHANNEL_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

function twitchUserChannel(state = {}, action) {
  if (typeof action.channelId !== 'undefined') {
    return {...state,
      [action.channelId]: userChannel(state[action.channelId], action)
    }
  }
  return state;
}

export default twitchUserChannel;

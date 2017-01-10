import {
  GET_STREAM_SUCCESS,
  GET_STREAM_ERROR,
  STREAM_LOADING,
  STREAM_LOADED
} from '../../../actions/twitchSDK/streams/stream';

function stream(
  state = {
    stream: {},
    channelId: null,
    error: null,
    receivedAt: null,
    loading: true
  }, action) {
  switch (action.type) {
    case GET_STREAM_SUCCESS:
      return {...state,
        stream: action.stream,
        channelId: action.channelId,
        error: null
      }
    case GET_STREAM_ERROR:
      return {...state,
        stream: {},
        channelId: action.channelId,
        error: action.error
      }
    case STREAM_LOADING:
      return {...state,
        loading: true,
      }
    case STREAM_LOADED:
      return {...state,
        loading: false,
      }
    default:
      return state;
  }
}

function twitchStream(state = {}, action) {
  if (typeof action.channelId !== 'undefined') {
    return {...state,
      [action.channelId]: stream(state[action.channelId], action)
    }
  }
  return state
}

export default twitchStream;

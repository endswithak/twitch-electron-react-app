import {
  GET_GAME_STREAMS_SUCCESS,
  GET_GAME_STREAMS_ERROR,
  GAME_STREAMS_LOADING,
  GAME_STREAMS_LOADED,
  MORE_GAME_STREAMS_SUCCESS,
  MORE_GAME_STREAMS_ERROR,
  MORE_GAME_STREAMS_LOADING,
  MORE_GAME_STREAMS_LOADED
} from '../../../actions/twitchSDK/streams/streamsByGame';

const initialState = {
  streams: [],
  limit: null,
  offset: null,
  nextOffset: null,
  game: null,
  total: null,
  error: null,
  loading: false,
  receivedAt: null,
  moreStreamsLoading: false
}

function streams(state = initialState, action) {
  switch (action.type) {
    case GET_GAME_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams,
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        game: action.game,
        total: action.total,
        receivedAt: action.receivedAt,
        error: null
      }
    case GET_GAME_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        game: null,
        total: null,
        error: action.error,
      }
    case GAME_STREAMS_LOADING:
      return {...state,
        loading: true,
      }
    case GAME_STREAMS_LOADED:
      return {...state,
        loading: false,
      }
    case MORE_GAME_STREAMS_SUCCESS:
      return {...state,
        streams: [...state.streams, ...action.streams],
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: null
      }
    case MORE_GAME_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        game: null,
        total: null,
        error: action.error,
      }
    case MORE_GAME_STREAMS_LOADING:
      return {...state,
        moreStreamsLoading: true
      }
    case MORE_GAME_STREAMS_LOADED:
      return {...state,
        moreStreamsLoading: false
      }
    default:
      return state;
  }
}

function twitchGameStreams(state = {}, action) {
  if (typeof action.game !== 'undefined') {
    return {...state,
      [action.game]: streams(state[action.game], action)
    }
  }
  return state
}

export default twitchGameStreams;

// @flow
import {
  GET_USER_STREAMS_SUCCESS,
  GET_USER_STREAMS_ERROR,
  USER_STREAMS_LOADING,
  USER_STREAMS_LOADED,
  RESET_USER_STREAMS,
  MORE_USER_STREAMS_SUCCESS,
  MORE_USER_STREAMS_ERROR,
  MORE_USER_STREAMS_LOADING,
  MORE_USER_STREAMS_LOADED
} from '../../../actions/twitchSDK/follows/streams';

const initialState = {
  streams: [],
  limit: null,
  offset: null,
  nextOffset: null,
  total: null,
  error: undefined,
  loading: true,
  moreUserStreamsLoading: false,
  receivedAt: null
}

export default function twitchUserStreams(state = initialState, action) {
  switch (action.type) {
    case GET_USER_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams,
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: undefined,
        receivedAt: action.receivedAt
      }
    case GET_USER_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        total: null,
        error: action.error
      }
    case USER_STREAMS_LOADING:
      return {...state,
        loading: true
      }
    case USER_STREAMS_LOADED:
      return {...state,
        loading: false
      }
    case RESET_USER_STREAMS:
      return {...state,
        loading: true,
        streams: [],
        total: null,
        error: undefined
      }
    case MORE_USER_STREAMS_SUCCESS:
      return {...state,
        streams: [...state.streams, ...action.streams],
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: undefined
      }
    case MORE_USER_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        total: null,
        error: action.error
      }
    case MORE_USER_STREAMS_LOADING:
      return {...state,
        moreUserStreamsLoading: true,
      }
    case MORE_USER_STREAMS_LOADED:
      return {...state,
        moreUserStreamsLoading: false,
      }
    default:
      return state;
  }
}

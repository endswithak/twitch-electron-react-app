import {
  GET_STREAMS_SUCCESS,
  GET_STREAMS_ERROR,
  STREAMS_LOADING,
  STREAMS_LOADED,
  MORE_STREAMS_SUCCESS,
  MORE_STREAMS_ERROR,
  MORE_STREAMS_LOADING,
  MORE_STREAMS_LOADED
} from '../../../actions/twitchSDK/streams/streams';

const initialState = {
  streams: [],
  limit: null,
  offset: null,
  total: null,
  nextOffset: null,
  error: null,
  loading: false,
  moreStreamsLoading: false,
  receivedAt: null
}

export default function twitchStreams(state = initialState, action) {
  switch (action.type) {
    case GET_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams,
        limit: action.limit,
        offset: action.offset,
        total: action.total,
        nextOffset: action.offset + action.limit,
        error: null,
        receivedAt: action.receivedAt
      }
    case GET_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        total: null,
        nextOffset: null,
        error: action.error
      }
    case STREAMS_LOADING:
      return {...state,
        loading: true,
      }
    case STREAMS_LOADED:
      return {...state,
        loading: false,
      }
    case MORE_STREAMS_SUCCESS:
      return {...state,
        streams: [...state.streams, ...action.streams],
        limit: action.limit,
        offset: action.offset,
        total: action.total,
        nextOffset: action.offset + action.limit,
        error: null
      }
    case MORE_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        total: null,
        nextOffset: null,
        error: action.error
      }
    case MORE_STREAMS_LOADING:
      return {...state,
        moreStreamsLoading: true,
      }
    case MORE_STREAMS_LOADED:
      return {...state,
        moreStreamsLoading: false,
      }
    default:
      return state;
  }
}

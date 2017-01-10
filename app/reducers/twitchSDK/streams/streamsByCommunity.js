import {
  GET_COMMUNITY_STREAMS_SUCCESS,
  GET_COMMUNITY_STREAMS_ERROR,
  COMMUNITY_STREAMS_LOADING,
  COMMUNITY_STREAMS_LOADED,
  MORE_COMMUNITY_STREAMS_SUCCESS,
  MORE_COMMUNITY_STREAMS_ERROR,
  MORE_COMMUNITY_STREAMS_LOADING,
  MORE_COMMUNITY_STREAMS_LOADED
} from '../../../actions/twitchSDK/streams/streamsByCommunity';

const initialState = {
  streams: [],
  limit: null,
  offset: null,
  nextOffset: null,
  communityId: null,
  total: null,
  error: null,
  loading: false,
  receivedAt: null,
  moreStreamsLoading: false
}

function streams(state = initialState, action) {
  switch (action.type) {
    case GET_COMMUNITY_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams,
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        communityId: action.communityId,
        total: action.total,
        receivedAt: action.receivedAt,
        error: null
      }
    case GET_COMMUNITY_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        communityId: null,
        total: null,
        error: action.error,
      }
    case COMMUNITY_STREAMS_LOADING:
      return {...state,
        loading: true,
      }
    case COMMUNITY_STREAMS_LOADED:
      return {...state,
        loading: false,
      }
    case MORE_COMMUNITY_STREAMS_SUCCESS:
      return {...state,
        streams: [...state.streams, ...action.streams],
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: null
      }
    case MORE_COMMUNITY_STREAMS_ERROR:
      return {...state,
        streams: [],
        limit: null,
        offset: null,
        nextOffset: null,
        communityId: null,
        total: null,
        error: action.error,
      }
    case MORE_COMMUNITY_STREAMS_LOADING:
      return {...state,
        moreStreamsLoading: true
      }
    case MORE_COMMUNITY_STREAMS_LOADED:
      return {...state,
        moreStreamsLoading: false
      }
    default:
      return state;
  }
}

function twitchCommunityStreams(state = {}, action) {
  if (typeof action.communityId !== 'undefined') {
    return {...state,
      [action.communityId]: streams(state[action.communityId], action)
    }
  }
  return state;
}

export default twitchCommunityStreams;

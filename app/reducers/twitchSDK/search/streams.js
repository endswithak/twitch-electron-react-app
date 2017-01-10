import {
  SEARCH_STREAMS_SUCCESS,
  SEARCH_STREAMS_ERROR,
  SEARCH_STREAMS_LOADING,
  SEARCH_STREAMS_LOADED
} from '../../../actions/twitchSDK/search/streams';

const initialState = {
  streams: [],
  error: null,
  loading: false
}

export default function twitchSearchStreams(state = initialState, action) {
  switch (action.type) {
    case SEARCH_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams,
        error: null,
      }
    case SEARCH_STREAMS_ERROR:
      return {...state,
        streams: [],
        error: action.error,
      }
    case SEARCH_STREAMS_LOADING:
      return {...state,
        loading: true
      }
    case SEARCH_STREAMS_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

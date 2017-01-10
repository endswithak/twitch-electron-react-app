import {
  SEARCH_CHANNELS_SUCCESS,
  SEARCH_CHANNELS_ERROR,
  SEARCH_CHANNELS_LOADING,
  SEARCH_CHANNELS_LOADED
} from '../../../actions/twitchSDK/search/channels';

const initialState = {
  channels: [],
  error: null,
  loading: false
}

export default function twitchSearchChannels(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANNELS_SUCCESS:
      return {...state,
        channels: action.channels,
        error: null,
      }
    case SEARCH_CHANNELS_ERROR:
      return {...state,
        channels: [],
        error: action.error,
      }
    case SEARCH_CHANNELS_LOADING:
      return {...state,
        loading: true
      }
    case SEARCH_CHANNELS_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

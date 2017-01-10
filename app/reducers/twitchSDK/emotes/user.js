import {
  GET_USER_EMOTES_SUCCESS,
  GET_USER_EMOTES_ERROR,
  USER_EMOTES_LOADING,
  USER_EMOTES_LOADED
} from '../../../actions/twitchSDK/emotes/user';

const initialState = {
  emotes: {},
  error: null,
  loading: true
}

function emotes(state = initialState, action) {
  switch (action.type) {
    case GET_USER_EMOTES_SUCCESS:
      return {...state,
        emotes: action.emotes,
        error: null,
      }
    case GET_USER_EMOTES_ERROR:
      return {...state,
        emotes: [],
        error: action.error,
      }
    case USER_EMOTES_LOADING:
      return {...state,
        loading: true
      }
    case USER_EMOTES_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

function twitchUserEmotes(state = {}, action) {
  if (typeof action.userId !== 'undefined') {
    return {...state,
      [action.userId]: emotes(state[action.userId], action)
    }
  }
  return state;
}

export default twitchUserEmotes;

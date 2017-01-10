// @flow
import {
  GET_USER_REL_SUCCESS,
  GET_USER_REL_ERROR,
  USER_REL_LOADING,
  USER_REL_LOADED,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_ERROR,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_ERROR
} from '../../../actions/twitchSDK/follows/userRel';

const initialState = {
  following: false,
  channelId: null,
  loading: true,
  error: null
}

function userRel(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REL_SUCCESS:
      return {...state,
        following: true,
        channelId: action.channelId
      }
    case GET_USER_REL_ERROR:
      return {...state,
        following: false,
        channelId: action.channelId
      }
    case FOLLOW_USER_SUCCESS:
      return {...state,
        following: true,
        channelId: action.channelId
      }
    case FOLLOW_USER_ERROR:
      return {...state,
        error: action.error,
        channelId: action.channelId
      }
    case UNFOLLOW_USER_SUCCESS:
      return {...state,
        following: false,
        channelId: action.channelId
      }
    case UNFOLLOW_USER_ERROR:
      return {...state,
        error: action.error,
        channelId: action.channelId
      }
    case USER_REL_LOADING:
      return {...state,
        loading: true,
        channelId: action.channelId
      }
    case USER_REL_LOADED:
      return {...state,
        loading: false,
        channelId: action.channelId
      }
    default:
      return state;
  }
}

function twitchUserRel(state = {}, action) {
  if (typeof action.channelId !== 'undefined') {
    return {...state,
      [action.channelId]: userRel(state[action.channelId], action)
    }
  }
  return state
}

export default twitchUserRel;

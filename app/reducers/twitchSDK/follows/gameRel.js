// @flow
import {
  GET_GAME_REL_SUCCESS,
  GET_GAME_REL_ERROR,
  GAME_REL_LOADING,
  GAME_REL_LOADED,
  FOLLOW_GAME_SUCCESS,
  FOLLOW_GAME_ERROR,
  UNFOLLOW_GAME_SUCCESS,
  UNFOLLOW_GAME_ERROR
} from '../../../actions/twitchSDK/follows/gameRel';

function gameRel(
  state: Object = {
    following: false,
    loading: true,
    error: null
  }, action: Object) {
  switch (action.type) {
    case GET_GAME_REL_SUCCESS:
      return {...state,
        following: true
      }
    case GET_GAME_REL_ERROR:
      return {...state,
        following: false
      }
    case FOLLOW_GAME_SUCCESS:
      return {...state,
        following: true
      }
    case FOLLOW_GAME_ERROR:
      return {...state,
        error: action.error
      }
    case UNFOLLOW_GAME_SUCCESS:
      return {...state,
        following: false
      }
    case UNFOLLOW_GAME_ERROR:
      return {...state,
        error: action.error
      }
    case GAME_REL_LOADING:
      return {...state,
        loading: true
      }
    case GAME_REL_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

function twitchGameRel(state = {}, action) {
  if (typeof action.game !== 'undefined') {
    return {...state,
      [action.game]: gameRel(state[action.game], action)
    }
  }
  return state
}

export default twitchGameRel;

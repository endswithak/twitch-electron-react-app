import {
  GET_COMMUNITY_SUCCESS,
  GET_COMMUNITY_ERROR,
  COMMUNITY_LOADING,
  COMMUNITY_LOADED
} from '../../../actions/twitchSDK/communities/community';

const initialState = {
  community: {},
  communityId: null,
  error: null,
  loading: true
}

function community(state = initialState, action) {
  switch (action.type) {
    case GET_COMMUNITY_SUCCESS:
      return {...state,
        community: action.community,
        communityId: action.communityId,
        error: null,
      }
    case GET_COMMUNITY_ERROR:
      return {...state,
        community: {},
        communityId: null,
        error: action.error,
      }
    case COMMUNITY_LOADING:
      return {...state,
        loading: true
      }
    case COMMUNITY_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

function twitchCommunity(state = {}, action) {
  if (typeof action.communityId !== 'undefined') {
    return {...state,
      [action.communityId]: community(state[action.communityId], action)
    }
  }
  return state;
}

export default twitchCommunity;

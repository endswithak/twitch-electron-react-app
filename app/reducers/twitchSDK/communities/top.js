import {
  GET_TOP_COMMUNITIES_SUCCESS,
  GET_TOP_COMMUNITIES_ERROR,
  TOP_COMMUNITIES_LOADING,
  TOP_COMMUNITIES_LOADED,
  MORE_TOP_COMMUNITIES_SUCCESS,
  MORE_TOP_COMMUNITIES_ERROR,
  MORE_TOP_COMMUNITIES_LOADING,
  MORE_TOP_COMMUNITIES_LOADED
} from '../../../actions/twitchSDK/communities/top';

export default function twitchTopCommunities(
  state = {
    communities: [],
    limit: null,
    cursor: null,
    total: null,
    error: null,
    loading: true,
    receivedAt: null,
    moreCommunitiesLoading: false
  }, action) {
  switch (action.type) {
    case GET_TOP_COMMUNITIES_SUCCESS:
      return {...state,
        communities: action.communities,
        limit: action.limit,
        cursor: action.cursor,
        total: action.total,
        error: null,
        receivedAt: action.receivedAt
      }
    case GET_TOP_COMMUNITIES_ERROR:
      return {...state,
        communities: [],
        limit: null,
        cursor: null,
        total: null,
        error: action.error,
      }
    case TOP_COMMUNITIES_LOADING:
      return {...state,
        loading: true
      }
    case TOP_COMMUNITIES_LOADED:
      return {...state,
        loading: false
      }
    case MORE_TOP_COMMUNITIES_SUCCESS:
      return {...state,
        communities: [...state.communities, ...action.communities],
        limit: action.limit,
        cursor: action.cursor,
        total: action.total,
        error: null
      }
    case MORE_TOP_COMMUNITIES_ERROR:
      return {...state,
        communities: [],
        limit: null,
        cursor: null,
        total: null,
        error: action.error,
      }
    case MORE_TOP_COMMUNITIES_LOADING:
      return {...state,
        moreCommunitiesLoading: true
      }
    case MORE_TOP_COMMUNITIES_LOADED:
      return {...state,
        moreCommunitiesLoading: false
      }
    default:
      return state;
  }
}

import {
  GET_TOP_CLIPS_SUCCESS,
  GET_TOP_CLIPS_ERROR,
  TOP_CLIPS_LOADING,
  TOP_CLIPS_LOADED,
  MORE_TOP_CLIPS_SUCCESS,
  MORE_TOP_CLIPS_ERROR,
  MORE_TOP_CLIPS_LOADING,
  MORE_TOP_CLIPS_LOADED
} from '../../../actions/twitchSDK/clips/top';

export default function twitchTopClips(
  state = {
    clips: [],
    limit: null,
    period: null,
    trending: null,
    cursor: null,
    error: null,
    loading: true,
    receivedAt: null,
    moreClipsLoading: false
  }, action) {
  switch (action.type) {
    case GET_TOP_CLIPS_SUCCESS:
      return {...state,
        clips: action.clips,
        limit: action.limit,
        period: action.period,
        trending: action.trending,
        cursor: action.cursor,
        error: null,
        receivedAt: action.receivedAt
      }
    case GET_TOP_CLIPS_ERROR:
      return {...state,
        clips: [],
        limit: null,
        period: null,
        trending: null,
        cursor: null,
        error: action.error,
      }
    case TOP_CLIPS_LOADING:
      return {...state,
        loading: true
      }
    case TOP_CLIPS_LOADED:
      return {...state,
        loading: false
      }
    case MORE_TOP_CLIPS_SUCCESS:
      return {...state,
        clips: [...state.clips, ...action.clips],
        limit: action.limit,
        period: action.period,
        trending: action.trending,
        cursor: action.cursor,
        error: null
      }
    case MORE_TOP_CLIPS_ERROR:
      return {...state,
        clips: [],
        limit: null,
        period: null,
        trending: null,
        cursor: null,
        error: action.error,
      }
    case MORE_TOP_CLIPS_LOADING:
      return {...state,
        moreClipsLoading: true
      }
    case MORE_TOP_CLIPS_LOADED:
      return {...state,
        moreClipsLoading: false
      }
    default:
      return state;
  }
}

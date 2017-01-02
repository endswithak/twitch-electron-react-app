// @flow
import { INIT_SUCCESS, INIT_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_ERROR, GET_STATUS_SUCCESS, GET_STATUS_ERROR, GET_USER_SUCCESS, GET_USER_ERROR, GET_GAMES_SUCCESS, GET_GAMES_ERROR, GET_STREAMS_SUCCESS, GET_STREAMS_ERROR, GET_VIDEOS_SUCCESS, GET_VIDEOS_ERROR, GET_FOLLOWING_STREAMS_SUCCESS, GET_FOLLOWING_STREAMS_ERROR } from '../actions/twitchAPI';

export default function twitchAPI(state: Object = {init: false, status: {authenticated: false}, channel: {}, games: [], streams: []}, action: Object) {
  switch (action.type) {
    case INIT_SUCCESS:
      return {...state,
        init: true,
        status: action.status
      }
    case INIT_ERROR:
      return {...state,
        init: false,
        error: action.error
      }
    case LOGIN_SUCCESS:
      return {...state,
        status: action.status
      }
    case LOGOUT_SUCCESS:
      return {...state,
        channel: {}
      }
    case LOGOUT_ERROR:
      return {...state,
        error: action.error
      }
    case GET_STATUS_SUCCESS:
      return {...state,
        status: action.status
      }
    case GET_STATUS_ERROR:
      return {...state,
        error: action.error
      }
    case GET_USER_ERROR:
      return {...state,
        error: action.error
      }
    case GET_USER_SUCCESS:
      return {...state,
        channel: action.channel
      }
    case GET_GAMES_ERROR:
      return {...state,
        error: action.error
      }
    case GET_GAMES_SUCCESS:
      return {...state,
        games: action.games
      }
    case GET_STREAMS_ERROR:
      return {...state,
        error: action.error
      }
    case GET_STREAMS_SUCCESS:
      return {...state,
        streams: action.streams
      }
    case GET_VIDEOS_ERROR:
      return {...state,
        error: action.error
      }
    case GET_VIDEOS_SUCCESS:
      return {...state,
        videos: action.videos
      }
    case GET_FOLLOWING_STREAMS_ERROR:
      return {...state,
        error: action.error
      }
    case GET_FOLLOWING_STREAMS_SUCCESS:
      return {...state,
        following: {
          streams: action.streams
        }
      }
    default:
      return state;
  }
}

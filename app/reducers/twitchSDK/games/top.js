import {
  GET_TOP_GAMES_SUCCESS,
  GET_TOP_GAMES_ERROR,
  TOP_GAMES_LOADING,
  TOP_GAMES_LOADED,
  MORE_TOP_GAMES_SUCCESS,
  MORE_TOP_GAMES_ERROR,
  MORE_TOP_GAMES_LOADING,
  MORE_TOP_GAMES_LOADED
} from '../../../actions/twitchSDK/games/top';

const initialState = {
  games: [],
  limit: null,
  offset: null,
  nextOffset: null,
  total: null,
  error: null,
  loading: true,
  receivedAt: null,
  moreGamesLoading: false
}

export default function twitchTopGames(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_GAMES_SUCCESS:
      return {...state,
        games: action.games.top,
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: null,
        receivedAt: action.receivedAt
      }
    case GET_TOP_GAMES_ERROR:
      return {...state,
        games: [],
        limit: null,
        offset: null,
        nextOffset: null,
        total: null,
        error: action.error,
      }
    case TOP_GAMES_LOADING:
      return {...state,
        loading: true
      }
    case TOP_GAMES_LOADED:
      return {...state,
        loading: false
      }
    case MORE_TOP_GAMES_SUCCESS:
      return {...state,
        games: [...state.games, ...action.games.top],
        limit: action.limit,
        offset: action.offset,
        nextOffset: action.offset + action.limit,
        total: action.total,
        error: null
      }
    case MORE_TOP_GAMES_ERROR:
      return {...state,
        games: [],
        limit: null,
        offset: null,
        nextOffset: null,
        total: null,
        error: action.error,
      }
    case MORE_TOP_GAMES_LOADING:
      return {...state,
        moreGamesLoading: true
      }
    case MORE_TOP_GAMES_LOADED:
      return {...state,
        moreGamesLoading: false
      }
    default:
      return state;
  }
}

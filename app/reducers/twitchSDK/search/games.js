import {
  SEARCH_GAMES_SUCCESS,
  SEARCH_GAMES_ERROR,
  SEARCH_GAMES_LOADING,
  SEARCH_GAMES_LOADED
} from '../../../actions/twitchSDK/search/games';

const initialState = {
  games: [],
  error: null,
  loading: false
}

export default function twitchSearchGames(state = initialState, action) {
  switch (action.type) {
    case SEARCH_GAMES_SUCCESS:
      return {...state,
        games: [...action.games.slice(0, 10)],
        error: null,
      }
    case SEARCH_GAMES_ERROR:
      return {...state,
        games: [],
        error: action.error,
      }
    case SEARCH_GAMES_LOADING:
      return {...state,
        loading: true
      }
    case SEARCH_GAMES_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

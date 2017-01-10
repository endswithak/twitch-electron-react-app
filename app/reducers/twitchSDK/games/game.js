import {
  GET_GAME_SUCCESS,
  GET_GAME_ERROR,
  GAME_LOADING,
  GAME_LOADED
} from '../../../actions/twitchSDK/games/game';

const initialState = {
  game: {},
  error: null,
  loading: true
}

function game(state = initialState, action) {
  switch (action.type) {
    case GET_GAME_SUCCESS:
      return {...state,
        game: action.game,
        error: null,
      }
    case GET_GAME_ERROR:
      return {...state,
        game: {},
        error: action.error,
      }
    case GAME_LOADING:
      return {...state,
        loading: true
      }
    case GAME_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}

function twitchGame(state = {}, action) {
  if (typeof action.gameName !== 'undefined') {
    return {...state,
      [action.gameName]: game(state[action.gameName], action)
    }
  }
  return state;
}

export default twitchGame;

import Twitch from 'twitch-sdk';

export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS';
export const GET_GAME_ERROR = 'GET_GAME_ERROR';
export const GAME_LOADING = 'GAME_LOADING';
export const GAME_LOADED = 'GAME_LOADED';

export function getGameSuccess(gameName, game) {
  return {
    type: GET_GAME_SUCCESS,
    gameName,
    game
  };
}

export function getGameError(gameName, error) {
  return {
    type: GET_GAME_ERROR,
    gameName,
    error
  };
}

export function gameLoading(gameName) {
  return {
    type: GAME_LOADING,
    gameName
  };
}

export function gameLoaded(gameName) {
  return {
    type: GAME_LOADED,
    gameName
  };
}

export function shouldGetGame(state, gameName) {
  const game = state.twitchGame[gameName];
  if (!game || !game.game._id) {
    return true;
  } else {
    return false;
  }
}

export function getGameIfNeeded(gameName) {
  return (dispatch, getState) => {
    if (shouldGetGame(getState(), gameName)) {
      return dispatch(getGame(gameName));
    }
  }
}

export function getGame(gameName) {
  return (dispatch) => {
    dispatch(gameLoading(gameName));
    Twitch.api({method: 'search/games', params: {query: encodeURIComponent(gameName), type:'suggest', live: true, api_version: 5}}, (error, games) => {
      if (error) {
        dispatch(getGameError(gameName, error));
      } else {
        dispatch(getGameSuccess(gameName, games.games[0]));
      }
      dispatch(gameLoaded(gameName));
    });
  };
}

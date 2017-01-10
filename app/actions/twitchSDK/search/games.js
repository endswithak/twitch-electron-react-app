import Twitch from 'twitch-sdk';

export const SEARCH_GAMES_SUCCESS = 'SEARCH_GAMES_SUCCESS';
export const SEARCH_GAMES_ERROR = 'SEARCH_GAMES_ERROR';
export const SEARCH_GAMES_LOADING = 'SEARCH_GAMES_LOADING';
export const SEARCH_GAMES_LOADED = 'SEARCH_GAMES_LOADED';

export function searchGamesSuccess(games) {
  return {
    type: SEARCH_GAMES_SUCCESS,
    games
  };
}

export function searchGamesError(error) {
  return {
    type: SEARCH_GAMES_ERROR,
    error
  };
}

export function searchGamesLoading() {
  return {
    type: SEARCH_GAMES_LOADING,
  };
}

export function searchGamesLoaded() {
  return {
    type: SEARCH_GAMES_LOADED,
  };
}

export function searchGames(q) {
  return (dispatch) => {
    dispatch(searchGamesLoading());
    Twitch.api({method: 'search/games', params: {query:encodeURIComponent(q), api_version:5, live: true}}, (error, games) => {
      if (error) {
        dispatch(searchGamesError(error));
      } else {
        dispatch(searchGamesSuccess(games.games ? games.games : []));
      }
      dispatch(searchGamesLoaded());
    });
  };
}
